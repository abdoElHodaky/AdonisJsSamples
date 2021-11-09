'use strict'

const Schema = use('Schema')

class ContractsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('contracts', (table) => {
      table.increments("contractid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.text("content")
      table.string("status").nullable()
      table.string("type").nullable()
      //table.integer("offattid").unsigned()
     // table.foreign("offattid").references("offattid").on("offer_attachment")
    })
  }

  down () {
    this.drop('contracts')
  }

}

module.exports = ContractsTableSchema
