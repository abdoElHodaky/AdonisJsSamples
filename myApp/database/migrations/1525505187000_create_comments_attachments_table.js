'use strict'

const Schema = use('Schema')

class CommentAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('comments_attachments', (table) => {
      table.increments("comattid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("commid").unsigned()
      table.foreign("commid").references("commid").on("comments")
     
  }

  down () {
    this.drop('comments_attachments')
  }

}

module.exports = CommentAttachmentsTableSchema
