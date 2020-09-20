'use strict'

const Schema = use('Schema')

class NotificationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('notification', (table) => {
      table.increments("notificid")
      table.timestamps()
      //table.json("action")
      table.integer("actid").unsigned()
      table.foreign("actid").references("actid").on("activities")
      table.softDeletes()
    })
  }

  down () {
    this.drop('notifications')
  }

}

module.exports = NotificationsTableSchema
