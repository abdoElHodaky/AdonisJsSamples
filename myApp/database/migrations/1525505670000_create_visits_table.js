
'use strict'

const Schema = use('Schema')

class VisitsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('visits', (table) => {
      table.increments("visid")
      table.timestamps()
      table.string("scope",50)/*page.[name]*/
      table.boolean("isGuest").default(true)
      table.timestamp("duration")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
     // table.integer("session_id")
    //  table.foreign("session_id").references("session_id").on("sessions"
     
  }

  down () {
    this.drop('visits')
  }

}

module.exports = VisitsTableSchema
