
'use strict'

const Schema = use('Schema')

class VerificationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('verifications', (table) => {
      table.increments("verifid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.enu("type",["device","email"])
      /*table.integer("devid").unsigned()
      table.foreign("devid").references("devid").on("devices")*/
      table.integer("related_to_id").unsigned()
      table.foreign("related_to_id").references("related_to_id").on("verifications")
      table.softDeletes()
    })
  }

  down () {
    this.drop('verifications')
  }

}

module.exports = VerificationsTableSchema
