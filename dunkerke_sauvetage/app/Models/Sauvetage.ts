import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sauvetage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_units: number

  @column()
  public nbPersonne: number

  @column.dateTime()
  public date: DateTime

  @column()
  public nbEquipage: number

  @column()
  public nbSauveteurDecede: number

  @column()
  public id_patron: number

  @column()
  public id_sousPatron: number

  @column()
  public recit: string

  @column()
  public armement: string
}
