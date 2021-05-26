'use strict'

const Schema = use('Schema')

class FundsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('funds', (table) => {
      table.increments("fundid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.integer("amount").default(1)
      table.integer("parent_id")
      table.foreign("parent_id").references("fundid").on("fundid")
      table.softDeletes()
    })
  }

  down () {
    this.drop('funds')
  }

}

module.exports = FundsTableSchema
