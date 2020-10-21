'use strict'

const Schema = use('Schema')

class TypedUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('typed_users', (table) => {
      table.increments("tuid")
      table.timestamps()
      table.integer("utid").unsigned().default(0)
      table.foreign("utid").references("utid").on("users_types")
      table.integer("uid").unsigned().default(0)
      table.foreign("uid").references("uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users_types')
  }

}

module.exports = TypedUsersTableSchema
