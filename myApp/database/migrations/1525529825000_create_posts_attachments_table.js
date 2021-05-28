'use strict'

const Schema = use('Schema')

class PostsAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('posts_attachments', (table) => {
      table.increments("postattid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("postid").unsigned()
      table.foreign("postid").references("postid").on("posts")
     
  }

  down () {
    this.drop('posts_attachments')
  }

}

module.exports = PostsAttachmentsTableSchema
