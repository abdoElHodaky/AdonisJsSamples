

'use strict'

const Schema = use('Schema')

class EventsUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('events_users', (table) => {
      table.increments("evtuid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("evtid").unsigned()
      table.foreign("evtid").references("evtid").on("events")
      table.enu("status",["interested","coming"])
      table.softDeletes()
    })
  }

  down () {
    this.drop('events_users')
  }

}

module.exports = EventsUsersTableSchema
