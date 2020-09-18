
'use strict'

const Schema = use('Schema')

class FollowersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('followers', (table) => {
      table.increments("follid")
      table.timestamps()
     // table.integer("uid").unsigned()
     // table.foreign("uid").references("uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('followers')
  }

}

module.exports = FollowersTableSchema
