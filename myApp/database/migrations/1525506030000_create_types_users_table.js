'use strict'

const Schema = use('Schema')

class TypesUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('types_users', (table) => {
      table.increments("utype_id")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("related_to_id").unsigned()
      table.foreign("related_to_id").references("utype_id").on("types_users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('types_users')
  }

}

module.exports = TypesUsersTableSchema
