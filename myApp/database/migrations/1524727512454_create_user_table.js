'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users', (table) => {
      table.increments("uid")
      table.timestamps()
      table.string("name",50).unique()
      table.string("password").nullable(false)
      //table.string("Email",50).unique()
      table.text("bio").default("")
     // table.json("addit_info").default("{}")
      table.integer("related_type_id").unsigned().default(0)
      table.foreign("related_type_id").references("id").on("users_types")
      table.integer("related_to_id").unsigned().default(0)
      table.foreign("related_to_id").references("uid").on("users")
     // table.integer("follid").unsigned().default(0)
    //  table.foreign("follid").references("follid").on("followers")
      table.softDeletes()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
