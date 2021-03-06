'use strict'

const Schema = use('Schema')

class TransfersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('transfers', (table) => {
      table.increments("transid")
      table.timestamps()
      table.integer("oid").unsigned()
      table.foreign("oid").references("oid").on("orders")
      table.string("sender_address")
      table.integer("sender_uid")
      table.foreign("sender_uid").references("uid").on("users")
      table.integer("receiver_uid")
      table.foreign("receiver_uid").references("uid").on("users")
      table.string("receiver_address")
      table.float("amount").unsigned()
      table.foreign("sender_address").references("address").on("wallets")
      table.foreign("receiver_address").references("address").on("wallets")
   })
  }

  down () {
    this.drop('transfers')
  }

}

module.exports = TransfersTableSchema
