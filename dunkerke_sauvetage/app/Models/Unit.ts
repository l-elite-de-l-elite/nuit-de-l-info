import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Unit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nom: string

  @column()
  public prenom: string

  @column.dateTime()
  public dateNaissance: DateTime

  @column()
  public poste: string

  @column()
  public biographie: string

  @column()
  public etatCivil: string

  @column()
  public carriere:string

  @column()
  public donneeGenealogique: string

  @column()
  public discour: string
}
