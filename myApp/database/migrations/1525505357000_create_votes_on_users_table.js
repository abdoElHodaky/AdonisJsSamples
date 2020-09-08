'use strict'

const Schema = use('Schema')

class VotesOnUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('votes_on_users', (table) => {
      table.increments("votuid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("votid").unsigned()
      table.foreign("votid").references("votid").on("votes")
      
  }

  down () {
    this.drop('votes_on_users')
  }

}

module.exports = VotesOnUsersTableSchema
