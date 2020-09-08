'use strict'

const Schema = use('Schema')

class AdsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('ads', (table) => {
      table.increments("adid")
      table.timestamps()
      table.string("scope")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      
     
  }

  down () {
    this.drop('ads')
  }

}

module.exports = AdsTableSchema

