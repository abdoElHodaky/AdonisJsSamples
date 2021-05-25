'use strict'

const Schema = use('Schema')

class KeywordsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('keywords', (table) => {
      table.increments("keywid")
      table.timestamps()
      table.integer("suggestedby_uid").unsigned()
      table.foreign("suggestedby_uid").references("uid").on("users")
      table.string("content")
      })
  }

  down () {
    this.drop('keywords')
  }

}

module.exports = KeywordsTableSchema
