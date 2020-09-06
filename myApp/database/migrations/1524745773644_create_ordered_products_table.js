'use strict'

const Schema = use('Schema')

class OrderedProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('ordered_products', (table) => {
      table.increments("opid")
      table.timestamps()
      table.integer('oid').unsigned()
      table.foreign('oid').references("oid").on('orders')
      table.integer('pid').unsigned()
      table.foreign('pid').references('pid').on('products')
      table.integer('Quantity').unsigned()
    })
  }

  down () {
    this.drop('ordered_products')
  }

}

module.exports = OrderedProductsTableSchema
