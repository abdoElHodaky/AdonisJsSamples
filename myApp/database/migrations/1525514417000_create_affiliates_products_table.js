
'use strict'

const Schema = use('Schema')

class AffiliatesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('affiliates', (table) => {
      table.increments("affilid")
      table.timestamps()
      table.string("affiliate_code",30)
      table.integer("pid").unsigned().default(0)
      table.foreign("pid").references("pid").on("products")
      table.integer("uid").unsigned().default(0)
      table.foreign("uid").references("uid").on("users")
      table.integer("parent_id").unsigned().default(0)
      table.foreign("parent_id").references("affilid").on("affiliates")
      table.timestamp("expired_at")
      table.softDeletes()
  }

  down () {
    this.drop('affiliates')
  }

}

module.exports = AffiliatesTableSchema
