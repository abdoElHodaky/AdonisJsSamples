'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('messages', (table) => {
      table.increments("mesgid")
      table.timestamps()
      table.integer("uid").unsigned().default(0)
      table.foreign("uid").references("uid").on("users")
     // table.integer("sender_uid").unsigned().default(0)
      //table.foreign("sender_uid").references("uid").on("users")
      table.integer("receiver_uid").unsigned().default(0)
      table.foreign("receiver_uid").references("uid").on("users")
      table.integer("parent_id").unsigned().default(0)
      table.foreign("parent_id").references("mesgid").on("messages")
      //table.integer("replied_to_id").unsigned()
      //table.foreign("replied_to_id").references("mesgid").on("messages") 
      table.enu("type",["message","notification","conversation"]).default("conversation")
      table.text("content")
      table.integer("mesgattid").unsigned()
      table.foreign("mesgattid").references("mesgattid").on("messages_attachments")
       

  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
