'use strict'

const Schema = use('Schema')

class OffersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('offers', (table) => {
      table.increments()
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("id").on("users")
      table.string("status").nullable()

    })
  }

  down () {
    this.drop('offers')
  }

}

module.exports = OffersTableSchema
