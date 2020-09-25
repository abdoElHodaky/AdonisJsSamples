'use strict'

const Schema = use('Schema')

class PasswordsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('passwords', (table) => {
      table.increments("passid")
      table.timestamps()
      table.string("password",50)
      table.string("hash",100)
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
     // table.boolean("secondary")
     // table.integer("parent_id")
     // table.foreign("parent_id").references("locatid").on("locations")
      table.softDeletes()
    })
  }

  down () {
    this.drop('passwords')
  }

}

module.exports = PasswordsTableSchema
