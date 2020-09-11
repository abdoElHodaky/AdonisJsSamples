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
      table.integer("from_uid").unsigned()
      table.foreign("from_uid").references("uid").on("users")
      table.integer("to_uid").unsigned()
      table.foreign("to_uid").references("uid").on("users")
      table.integer("parent_id").unsigned()
      table.foreign("parent_id").references("mesgid").on("messages")
      table.integer("replied_to_id").unsigned()
      table.foreign("replied_to_id").references("mesgid").on("messages") 
      table.enu("type",["message","notification","conversation"]).default("conversation")
      table.integer("mesgattid").unsigned()
      table.foreign("mesgattid").references("mesgattid").on("messages_attachments")
       

  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
