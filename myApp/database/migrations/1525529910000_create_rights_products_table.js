'use strict'

const Schema = use('Schema')

class RightsProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('rights_products', (table) => {
      table.increments("rightpid")
      table.timestamps()
      
      table.integer("pid").unsigned()
      table.foreign("pid").references("pid").on("products")
      table.integer("rightid").unsigned()
      table.foreign("rightid").references("rightid").on("rights")
     
  }

  down () {
    this.drop('rights_products')
  }

}

module.exports = RightsProductsTableSchema
