'use strict'

const Schema = use('Schema')

class ShopsAffiliatesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_affiliates', (table) => {
      table.increments("shaffilid")
      table.timestamps()
      //table.string("affiliate_code",30)
      
      table.integer("sid").unsigned().default(0)
      table.foreign("sid").references("sid").on("shops")
      table.integer("affilid").unsigned().default(0)
      table.foreign("affilid").references("affilid").on("affiliates")
      //table.timestamp("expired_at")
      table.softDeletes()
  }

  down () {
    this.drop('shops_affiliates')
  }

}

module.exports = ShopsAffiliatesTableSchema
