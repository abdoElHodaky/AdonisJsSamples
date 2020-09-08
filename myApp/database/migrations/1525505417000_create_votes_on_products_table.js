'use strict'

const Schema = use('Schema')

class VotesOnUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('votes_on_products', (table) => {
      table.increments("votpid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("pid").references("pid").on("products")
      table.integer("votid").unsigned()
      table.foreign("votid").references("votid").on("votes")
      
  }

  down () {
    this.drop('votes_on_products')
  }

}

module.exports = VotesOnProductsTableSchema
