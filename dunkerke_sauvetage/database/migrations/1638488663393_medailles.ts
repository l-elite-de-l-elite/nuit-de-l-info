import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medailles extends BaseSchema {
  protected tableName = 'medailles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_unit')
      table.timestamp('date', { useTz: true })
      table.string('nom')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
