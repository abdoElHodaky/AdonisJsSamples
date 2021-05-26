'use strict'

const Schema = use('Schema')

class EquitySharesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('equity_shares', (table) => {
      table.increments("equishid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.integer("amount")
      table.float("percentage")
      table.integer("parent_id")
      table.foreign("parent_id").references("equishid").on("equishid")
      table.integer("fundid").unique()
      table.foreign("fundid").references("fundid").on("funds")
      table.softDeletes()
    })
  }

  down () {
    this.drop('equity_shares')
  }

}

module.exports = EquitySharesTableSchema
