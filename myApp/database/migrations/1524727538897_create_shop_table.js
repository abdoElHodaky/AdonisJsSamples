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
    //  table.json("addit_info").default("{}")
      table.text("bio")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("parent_id").unsigned().default(0)
      table.foreign("parent_id").references("sid").on("shops")
     // table.integer("shptype_id").unsigned()
      //table.foreign("shptype_id").references("shptype_id").on("types_shops")
      //table.integer("follsid").unsigned().default(0)
     // table.foreign("follsid").references("follsid").on("shops_followers")
      table.integer("sid").unsigned().default(0)
      table.foreign("sid").references("sid").on("shops_funds")
      table.string("w_addess")
      table.foreign("w_addess").references("address").on("wallets")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops')
  }

}

module.exports = ShopsTableSchema
