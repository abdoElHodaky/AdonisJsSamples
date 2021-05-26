'use strict'

const Schema = use('Schema')

class FundsEquitySharesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('funds_equity_shares', (table) => {
      table.increments("fundequishid")
      table.timestamps()
      table.integer("equishid")
      table.foreign("equishid").references("equishid").on("equishid")
      table.integer("fundid").unique()
      table.foreign("fundid").references("fundid").on("funds")
      table.softDeletes()
    })
  }

  down () {
    this.drop('funds_equity_shares')
  }

}

module.exports = FundsEquitySharesTableSchema
