'use strict'

const Schema = use('Schema')

class CommentAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('offers_attachments', (table) => {
      table.increments("offattid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("offid").unsigned()
      table.foreign("offid").references("offid").on("offers")
     
  }

  down () {
    this.drop('offers_attachments')
  }

}

module.exports = OfferAttachmentsTableSchema
