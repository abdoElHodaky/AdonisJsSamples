'use strict'

const Schema = use('Schema')

class MessagesAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('messages_attachments', (table) => {
      table.increments("mesgattid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("mesgid").unsigned()
      table.foreign("mesgid").references("mesgid").on("messages")
     
  }

  down () {
    this.drop('messages_attachments')
  }

}

module.exports = MessagesAttachmentsTableSchema
