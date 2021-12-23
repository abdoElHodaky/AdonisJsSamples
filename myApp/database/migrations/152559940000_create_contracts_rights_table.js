'use strict'

const Schema = use('Schema')

class ContractsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('contracts_rights', (table) => {
      table.increments("contractid")
      table.timestamps()
     table.integer("contractid").unsigned()
      table.foreign("contractid").references("contractid").on("contracts")
      //table.text("content")
      table.string("status").nullable()
      table.string("type").nullable()
      //table.integer("offattid").unsigned()
     // table.foreign("offattid").references("offattid").on("offer_attachment")
    })
  }

  down () {
    this.drop('contracts_rights')
  }

}

module.exports = ContractsRightsTableSchema
