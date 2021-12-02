// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
    public async register ({ request, response }: HttpContextContract) {
        const user = new User()

        user.email = request.input('email')
        user.username = request.input('username')
        user.password = request.input('password')

        await user.save()

        response.send('User created')
    }

    public async login ({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
