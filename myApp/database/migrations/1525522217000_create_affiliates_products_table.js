'use strict'

const Schema = use('Schema')

class AffiliatesProductsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('affiliates_products', (table) => {
      table.increments("affilpid")
      table.timestamps()
      //table.string("affiliate_code",30)
      table.integer("pid").unsigned().default(0)
      table.foreign("pid").references("pid").on("products")
     // table.integer("uid").unsigned().default(0)
     // table.foreign("uid").references("uid").on("users")
      table.integer("affilid").unsigned().default(0)
      table.foreign("affilid").references("affilid").on("affiliates")
      table.boolean("ordered")
      table.softDeletes()
  }

  down () {
    this.drop('affiliates_products')
  }

}

module.exports = AffiliatesProductsTableSchema
