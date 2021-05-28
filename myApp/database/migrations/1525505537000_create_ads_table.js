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
      table.string("scope",50)/*table.[id]*/
      table.binary("content")
      table.integer("visits_count")
      table.boolean("isPaid")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.json("targeting").default("{}")
      
     
  }

  down () {
    this.drop('ads')
  }

}

module.exports = AdsTableSchema

