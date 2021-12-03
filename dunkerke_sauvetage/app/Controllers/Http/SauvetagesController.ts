import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sauvetage from 'App/Models/Sauvetage'

export default class SauvetagesController {
  public async index({}: HttpContextContract) {}

  public async create({ request, response }: HttpContextContract) {
    const sauvetage = new Sauvetage()
    sauvetage.id_units = request.input('id_units')
    sauvetage.nbPersonne = request.input('nbPersonne')
    sauvetage.date = request.input('date')
    sauvetage.nbEquipage = request.input('nbEquipage')
    sauvetage.nbSauveteurDecede = request.input('nbSauveteurDecede')
    sauvetage.id_patron = request.input('id_patron')
    sauvetage.id_sousPatron = request.input('id_sousPatron')
    sauvetage.recit = request.input('recit')
    sauvetage.armement = request.input('armement')

    await sauvetage.save()

    response.send('new sauvetage created')
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
