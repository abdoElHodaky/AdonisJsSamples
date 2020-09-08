
'use strict'

const Schema = use('Schema')

class TransferTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('transfer', (table) => {
      table.increments()
      table.timestamps()
      table.integer("oid").unsigned()
      table.foreign("oid").references("oid").on("orders")
      table.integer("sender_uid").unsigned()
      table.foreign("sender_uid").references("uid").on("users")
      table.integer("receiver_uid").unsigned()
      table.foreign("receiver_uid").references("uid").on("users")

   })
  }

  down () {
    this.drop('transfer')
  }

}

module.exports = TransferTableSchema
