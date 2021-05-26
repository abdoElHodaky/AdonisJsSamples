'use strict'

const Schema = use('Schema')

class ShopsFundsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_funds', (table) => {
      table.increments("shpfundid")
      table.timestamps()
      table.integer("sid").unique()
      table.foreign("sid").references("sid").on("shops")
      table.integer("fundid")
      table.foreign("fundid").references("fundid").on("fundid")
      
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops_funds')
  }

}

module.exports = ShopsFundsTableSchema
