
'use strict'

const Schema = use('Schema')

class AdsAttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('ads_attachments', (table) => {
      table.increments("adaid")
      table.timestamps()
      table.integer("aid").unsigned()
      table.foreign("aid").references("aid").on("attachments")
      table.integer("adid").unsigned()
      table.foreign("adid").references("adid").on("ads")
     
  }

  down () {
    this.drop('ads_attachments')
  }

}

module.exports = AdsAttachmentsTableSchema
