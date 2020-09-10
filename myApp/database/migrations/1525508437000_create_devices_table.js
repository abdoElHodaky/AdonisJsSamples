
'use strict'

const Schema = use('Schema')

class DevicesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('devices', (table) => {
      table.increments("devid")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.string("verify_code",50)
      table.boolean("verified")
      table.integer("verifid").unsigned()
      table.foreign("verifid").references("veryfid").on("verification")
      table.softDeletes()
    })
  }

  down () {
    this.drop('devices')
  }

}

module.exports = DevicesTableSchema
