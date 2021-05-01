'use strict'

const Schema = use('Schema')

class PricesProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('prices_products', (table) => {
      table.increments("pricpid")
      table.timestamps()
      table.string("password",50)
      table.string("hash",100)
      table.integer("pid").unique()
      table.foreign("pid").references("pid").on("products")
      table.integer("pricid").unique()
      table.foreign("pricid").references("pricid").on("prices")
      table.integer("parent_id")
      table.foreign("parent_id").references("pricpid").on("pricpid")
      table.softDeletes()
    })
  }

  down () {
    this.drop('prices_products')
  }

}

module.exports = PricesProductsTableSchema
