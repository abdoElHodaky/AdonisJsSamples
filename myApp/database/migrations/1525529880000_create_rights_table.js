'use strict'

const Schema = use('Schema')

class RightsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('rights', (table) => {
      table.increments("rightid")
      table.timestamps()
      table.text("content")
      table.boolean("active").default("false")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("parent_id").unsigned()
      table.foreign("parent_id").references("rightid").on("rights")
     
  }

  down () {
    this.drop('rights')
  }

}

module.exports = RightsTableSchema
