
'use strict'

const Schema = use('Schema')

class VerificationTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('verification', (table) => {
      table.increments("verifid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.enu("type",["device","email"])
      table.integer("devid").unsigned()
      table.foreign("devid").references("devid").on("devices")
      table.softDeletes()
    })
  }

  down () {
    this.drop('verification')
  }

}

module.exports = VerificationTableSchema
