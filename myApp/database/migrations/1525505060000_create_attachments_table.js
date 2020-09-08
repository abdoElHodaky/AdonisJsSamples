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
      table.string("type").nullable()
      table.enu("attachment_type",["file","url","thumbnail"])
      table.binary(attachment_src)
      table.integer("OnId")
      table.string("OnType",20)
      table.index(["OnId","OnType"],"On")
      })
  }

  down () {
    this.drop('attachments')
  }

}

module.exports = AttachmentsTableSchema
