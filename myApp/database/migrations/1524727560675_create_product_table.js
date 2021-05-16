'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('products', (table) => {
      table.increments("pid")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("Quantity").nullable(false).default(0)
      table.enu("period",["month","year","hour","none"]).default("none")
      table.decimal("Price").default(0.0)
      table.binary("Image")
      table.boolean("used")
      table.json("addit_info").default("{}")
      table.integer("related_to_id").unsigned().default(0)
      table.foreign("related_to_id").references("pid").on("products")
      table.integer("cid").unsigned()
      table.foreign("cid").references("cid").on("cats")
      table.integer("pidattid").unsigned()
      table.foreign("pidattid").references("pidattid").on("products_attachments")
      table.softDeletes()
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsTableSchema
