'use strict'

const Schema = use('Schema')

class ShopsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops', (table) => {
      table.increments("sid")
      table.timestamps()
      table.string("Name",50).unique()
      table.binary("Image")
      table.string("type",50)
      table.json("addit_info").default("{}")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("parent_id").unsigned().default(0)
      table.foreign("parent_id").references("sid").on("shops")
      table.integer("shptype_id").unsigned()
      table.foreign("shptype_id").references("shptype_id").on("types_shops")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops')
  }

}

module.exports = ShopsTableSchema
