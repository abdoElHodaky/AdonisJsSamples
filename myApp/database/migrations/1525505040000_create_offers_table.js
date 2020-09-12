'use strict'

const Schema = use('Schema')

class OffersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('offers', (table) => {
      table.increments("offid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.text("content")
      table.string("status").nullable()
      table.string("type").nullable()
      table.integer("offattid").unsigned()
      table.foreign("offattid").references("offattid").on("offer_attachment")
    })
  }

  down () {
    this.drop('offers')
  }

}

module.exports = OffersTableSchema
