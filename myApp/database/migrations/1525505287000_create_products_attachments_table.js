'use strict'

const Schema = use('Schema')

class ProductAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('products_attachments', (table) => {
      table.increments("pattid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("pid").unsigned()
      table.foreign("pid").references("pid").on("products")
     
  }

  down () {
    this.drop('products_attachments')
  }

}

module.exports = ProductAttachmentsTableSchema
