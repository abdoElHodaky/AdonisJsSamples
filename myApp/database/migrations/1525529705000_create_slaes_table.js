'use strict'

const Schema = use('Schema')

class SalesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('sales', (table) => {
      table.increments("salid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.integer("amount").default(1)
      table.float("percentage")
      table.boolean("positive")
      table.integer("parent_id")
      table.foreign("parent_id").references("salid").on("salid")
      table.softDeletes()
    })
  }

  down () {
    this.drop('slaes')
  }

}

module.exports = SalesTableSchema
