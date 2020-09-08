
'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('comments', (table) => {
      table.increments("comid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.string("status").nullable()
      table.string("type").nullable()
      /*table.integer("comattid").unsigned()
       table.foreign("comattid").references("comattid").on("comments_attachment")
       */

  }

  down () {
    this.drop('comments')
  }

}

module.exports = AttachmentsTableSchema
