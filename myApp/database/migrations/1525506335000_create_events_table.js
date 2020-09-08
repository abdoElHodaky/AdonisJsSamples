

'use strict'

const Schema = use('Schema')

class EventTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('events', (table) => {
      table.increments("evtid")
      table.timestamps()
      table.string("Name",50).unique()
      table.json("addit_info").default("{}")
      table.integer("related_to_id").unsigned()
      table.foreign("related_to_id").references("evtid").on("events")
      table.softDeletes()
    })
  }

  down () {
    this.drop('events')
  }

}

module.exports = EventTableSchema
