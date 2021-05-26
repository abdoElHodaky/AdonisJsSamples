'use strict'

const Schema = use('Schema')

class WalletsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('wallets', (table) => {
      table.increments("wallid")
      table.timestamps()
      table.string("address").unique()
      table.boolean("used").default(false)
      //table.integer("cvv")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("balance").unsigned()
      table.enu("for",["transaction","businesses"])
      //table.integer("parent_id").unsigned()
     // table.foreign("parent_id").references("credid").on("credits")
     // table.integer("wallid").unsigned()
     // table.foreign("wallid").references("wallid").on("wallets")
      
    })
  }

  down () {
    this.drop('wallets')
  }

}

module.exports = WalletsTableSchema
