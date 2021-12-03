import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Unit from 'App/Models/Unit'

export default class UnitsController {
  public async index({}: HttpContextContract) {}

  public async create({ request, response }: HttpContextContract) {
    const unit = new Unit;
    unit.nom = request.input('nom')
    unit.prenom = request.input('prenom')
    unit.dateNaissance = request.input('dateNaissance')
    unit.poste = request.input('poste')
    unit.biographie = request.input('biographie')
    unit.etatCivil = request.input('etatCivil')
    unit.carriere = request.input('carriere')
    unit.donneeGenealogique = request.input('donneeGenealogique')
    unit.discour = request.input('discour')

    await unit.save()

    response.send('new unit created')
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
