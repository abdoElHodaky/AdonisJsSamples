
'use strict'

const Schema = use('Schema')

class CouponsUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('coupons_users', (table) => {
      table.increments("coupuid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("coupid").unsigned()
      table.foreign("coupid").references("coupid").on("coupons")
      table.softDeletes()
    })
  }

  down () {
    this.drop('coupons_users')
  }

}

module.exports = CouponsUsersTableSchema
