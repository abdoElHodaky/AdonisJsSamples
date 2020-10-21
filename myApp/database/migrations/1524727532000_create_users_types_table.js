'use strict'

const Schema = use('Schema')

class UsersTypesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users_types', (table) => {
      table.increments("utid")
      table.timestamps()
      table.string("name",50).unique()
      table.text("desc").default("")
      table.integer("related_id").unsigned().default(0)
      table.foreign("related_id").references("utid").on("users_types")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users_types')
  }

}

module.exports = UsersTypesTableSchema
