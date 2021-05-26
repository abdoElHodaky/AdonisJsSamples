'use strict'

const Schema = use('Schema')

class CreditsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('credits', (table) => {
      table.increments("credid")
      table.timestamps()
      table.string("credit_No",10)
      table.boolean("used").default(false)
      //table.integer("cvv")
       table.integer("uid").unsigned()
       table.foreign("uid").references("uid").on("users")
      table.integer("value").unsigned().default(500)
      table.integer("parent_id").unsigned()
      table.foreign("parent_id").references("credid").on("credits")
      table.integer("wallid").unsigned()
      table.foreign("wallid").references("wallid").on("wallets")
      table.enu("for",["transaction","businesses"])
      
    })
  }

  down () {
    this.drop('credits')
  }

}

module.exports = CreditsTableSchema
