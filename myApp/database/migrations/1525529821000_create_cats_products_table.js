'use strict'

const Schema = use('Schema')

class ProductsCatsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('products_cats', (table) => {
      table.increments("pidcid")
      table.timestamps()
      table.integer("pid").unsigned()
      table.foreign("pid").references('pid').on('products')
      table.integer("cid").usigned().default(0)
      table.foreign("cid").references("cid").on("cats")
      table.foreign("cid").references("cid").on("cats_shops")
      table.softDeletes()
    })
  }

  down () {
    this.drop('products_cats')
  }

}

module.exports = ProductsCatsTableSchema
