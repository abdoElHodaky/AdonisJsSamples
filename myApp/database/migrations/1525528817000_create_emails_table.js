'use strict'

const Schema = use('Schema')

class EmailsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('emails', (table) => {
      table.increments("emid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.boolean("secondary")
     // table.integer("parent_id")
     // table.foreign("parent_id").references("locatid").on("locations")
      table.softDeletes()
    })
  }

  down () {
    this.drop('emails')
  }

}

module.exports = EmailsTableSchema
