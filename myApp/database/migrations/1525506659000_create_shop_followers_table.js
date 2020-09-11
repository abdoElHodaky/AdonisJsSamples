
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
      table.integer("follid").unsigned()
      table.foreign("follid").references("follid").on("followers")
      table.integer("sid").unsigned()
      table.foreign("sid").references("sid").on("shops")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops_followers')
  }

}

module.exports = ShopsFollowersTableSchema
