'use strict'

const Schema = use('Schema')

class ShopsCatsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('cats_shops', (table) => {
      table.increments("cshid")
      table.timestamps()
      table.integer("sid").unsigned()
      table.foreign("sid").references('sid').on('shops')
      table.integer("cid").usigned().default(0)
      table.foreign("cid").references("cid").on("cats")
      table.softDeletes()
    })
  }

  down () {
    this.drop('cats_shops')
  }

}

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

module.exports = {CatsTableSchema,ProductsCatsTableSchema}
