'use strict'

const Schema = use('Schema')

class NotificationsUsersTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('notifications_users', (table) => {
      table.increments("notificuid")
      table.timestamps()
      table.integer("notificid").unsigned()
      table.foreign("notificid").references("notificid").on("notifications")
      table.timestamp("seen_at")
      table.integer("seen_by_uid").unsigned()
      table.foreign("seen_by_uid").references("seen_by_uid").on("users")
      table.softDeletes()
    })
  }

  down () {
    this.drop('notifications_users')
  }

}

module.exports = NotificationsUsersTableSchema
