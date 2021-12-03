import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Units extends BaseSchema {
  protected tableName = 'units'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nom').notNullable()
      table.string('prenom').notNullable()
      table.timestamp('date_naissance', { useTz: true }).notNullable()
      table.string('poste').notNullable()
      table.text('biographie')
      table.text('etat_civil')
      table.text('carriere')
      table.text('donnee_genealogique')
      table.text('discour')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
