
'use strict'

const Schema = use('Schema')

class TypesShopsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('types_shops', (table) => {
      table.increments("shptype_id")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("related_to_id").unsigned()
      table.foreign("related_to_id").references("shptype_id").on("types_shops")
      table.softDeletes()
    })
  }

  down () {
    this.drop('types_shops')
  }

}

module.exports = TypesShopsTableSchema
