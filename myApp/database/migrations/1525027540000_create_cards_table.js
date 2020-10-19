'use strict'

const Schema = use('Schema')

class CardsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('cards', (table) => {
      table.increments("cardid")
      table.timestamps()
      table.string("credit_No",10)
      table.integer("cvv")
      table.date("expire")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("wallid").unsigned()
      table.foreign("wallid").references("wallid").on("wallet")
      
    })
  }

  down () {
    this.drop('cards')
  }

}

module.exports = CardsTableSchema
