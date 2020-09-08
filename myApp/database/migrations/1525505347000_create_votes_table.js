'use strict'

const Schema = use('Schema')

class VotesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('votes', (table) => {
      table.increments("votid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      
     
  }

  down () {
    this.drop('votes')
  }

}

module.exports = VotesTableSchema

