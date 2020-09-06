'use strict'

const Schema = use('Schema')

class PaymentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('payments', (table) => {
      table.increments()
      table.timestamps()
      table.integer("uid").unsigned()
      table.integer("amount")
      table.foreign("uid").references("id").on("users")
      //table.json("hash")
    })
  }

  down () {
    this.drop('payments')
  }

}

module.exports = PaymentsTableSchema
