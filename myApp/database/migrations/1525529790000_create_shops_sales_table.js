'use strict'

const Schema = use('Schema')

class ShopsSalesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_sales', (table) => {
      table.increments("shpsalid")
      table.timestamps()
      table.integer("sid").unique()
      table.foreign("sid").references("sid").on("shops")
      table.integer("salid")
      table.foreign("salid").references("salid").on("sales")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops_sales')
  }

}

module.exports = ShopsSalesTableSchema
