'use strict'

const Schema = use('Schema')

class UsersLocationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users_locations', (table) => {
      table.increments("locatuid")
      table.timestamps()
      table.integer("uid").unique()
      table.foreign("uid").references("uid").on("users")
      table.integer("locatid")
      table.foreign("locatid").references("locatid").on("locations")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users_locations')
  }

}

module.exports = UsersLocationsTableSchema
