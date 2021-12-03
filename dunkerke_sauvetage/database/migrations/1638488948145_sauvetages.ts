import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sauvetages extends BaseSchema {
  protected tableName = 'sauvetages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_units').notNullable()
      table.integer('nb_personne').notNullable()
      table.timestamp('date', { useTz: true }).notNullable()
      table.integer('nb_equipage').notNullable()
      table.integer('nb_sauveteur_decede')
      table.integer('id_patron')
      table.integer('id_sous_patron')
      table.text('recit')
      table.text('armement')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
