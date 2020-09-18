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
   //   table.json("action")
     // table.integer("uid").unsigned()
    //  table.foreign("uid").references("uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('notifications')
  }

}

module.exports = NotificationsTableSchema
