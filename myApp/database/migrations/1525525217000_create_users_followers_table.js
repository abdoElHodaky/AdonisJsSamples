'use strict'

const Schema = use('Schema')

class UsersFollowersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users_followers', (table) => {
      table.increments("folluid")
      table.timestamps()
      table.integer("follid").unsigned()
      table.foreign("follid").references("follid").on("followers")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users_followers')
  }

}

module.exports = UsersFollowersTableSchema
