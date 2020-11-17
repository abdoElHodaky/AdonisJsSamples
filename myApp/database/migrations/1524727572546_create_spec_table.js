'use strict'

const Schema = use('Schema')

class SpecsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('specs', (table) => {
      table.increments("sid")
      table.timestamps()
      table.string("Name",50).nullable(false)
      table.integer("Value").nullable(false)
      //table.integer("pid").unsigned()
      //table.foreign("pid").references("pid").on("products")
      table.integer("parent_id").unsigned()
      table.foreign("parent_id").references("sid").on("products")
      table.softDeletes()
    })
  }

  down () {
    this.drop('specs')
  }

}

module.exports = SpecsTableSchema
