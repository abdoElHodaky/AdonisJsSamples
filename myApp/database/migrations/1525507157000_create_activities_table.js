
'use strict'

const Schema = use('Schema')

class ActivitiessTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('activities', (table) => {
      table.increments("actid")
      table.timestamps()
      table.string("action_type",30)
      table.timestamp("at")
      table.text("callback_url")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('activities')
  }

}

module.exports = ActivitiessTableSchema

