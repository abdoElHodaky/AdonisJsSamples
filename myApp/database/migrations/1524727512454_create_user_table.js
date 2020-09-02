'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.string("Password").nullable(false)
      table.string("Email",50).unique()
      table.string("type").nullable(false)
      table.integer("related_to_id")
      table.foreign("related_to_id").references("id").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
