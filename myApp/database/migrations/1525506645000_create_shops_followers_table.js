
'use strict'

const Schema = use('Schema')

class ShopsFollowersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_followers', (table) => {
      table.increments("follsid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("sid").unsigned()
      table.foreign("sid").references("sid").on("sid")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops')
  }

}

module.exports = ShopsFollowersTableSchema
