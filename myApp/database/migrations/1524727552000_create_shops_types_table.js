'use strict'

const Schema = use('Schema')

class ShopsTypesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_types', (table) => {
      table.increments("shtid")
      table.timestamps()
      table.string("name",50).unique()
      table.text("desc").default("")
      table.integer("related_id").unsigned().default(0)
      table.foreign("related_id").references("shtid").on("shops_types")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops_types')
  }

}

module.exports = ShopsTypesTableSchema
