'use strict'

const Schema = use('Schema')

class TypedShopsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('typed_shops', (table) => {
      table.increments("tshid")
      table.timestamps()
      table.integer("shtid").unsigned().default(0)
      table.foreign("shtid").references("shtid").on("shops_types")
      table.integer("sid").unsigned().default(0)
      table.foreign("sid").references("sid").on("shops")
      table.softDeletes()
    })
  }

  down () {
    this.drop('typed_shops')
  }

}

module.exports = TypedShopsTableSchema
