import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Medaille extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ isPrimary: true })
  public id_unit: number

  @column.dateTime({ isPrimary: true })
  public date: DateTime

  @column()
  public nom: string
}
