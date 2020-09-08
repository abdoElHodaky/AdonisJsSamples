'use strict'

const Schema = use('Schema')

class AttachmentsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('attachments', (table) => {
      table.increments("attid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.string("status").nullable()
      table.enu("attachment_type",["file","url","thumbnail"])
      table.binary(attachment_src)
      })
  }

  down () {
    this.drop('attachments')
  }

}

module.exports = AttachmentsTableSchema
