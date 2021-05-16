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
      //table.foreign("sender_uid").references("uid").on("users")
      table.string("receiver_address")
      table.float("amount").unsigned()
      table.foreign("address",["sender_address","receiver_address"])
      .references("address").on("wallets")
      

   })
  }

  down () {
    this.drop('transfers')
  }

}

module.exports = TransfersTableSchema
