
'use strict'

const Schema = use('Schema')

class CouponsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('coupons', (table) => {
      table.increments("coupid")
      table.timestamps()
      table.string("type",30).default("notMarket")
      table.string("Code",50).unique()
      table.float("amount")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("sid").unsigned()
      table.foreign("sid").references("sid").on("shops")
      table.timestamp("expired_at")
      table.boolean("expired").default(false)
      table.softDeletes()
    })
  }

  down () {
    this.drop('coupons')
  }

}

module.exports = CouponsTableSchema
