'use strict'

const Schema = use('Schema')

class DevicesVerificationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('devices_verifications', (table) => {
      table.increments("deiverifid")
      table.timestamps()
      table.boolean("verified")
      table.integer("verifid")
      table.foreign("verifid").references("verifid").on("verifications")
      table.integer("devid").unsigned()
      table.foreign("devid").references("devid").on("devices")
      table.softDeletes()
    })
  }

  down () {
    this.drop('devices_verifications')
  }

}

module.exports = DevicesVerificationsTableSchema
