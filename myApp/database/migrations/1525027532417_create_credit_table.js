'use strict'

const Schema = use('Schema')

class CreditsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('credits', (table) => {
      table.increments("cid")
      table.timestamps()
      table.text("creditNo")
      table.date("expires")
      table.integer("cvv")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("balance").unsigned()
    })
  }

  down () {
    this.drop('credits')
  }

}

module.exports = CreditsTableSchema
