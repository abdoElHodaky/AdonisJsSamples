'use strict'

const Schema = use('Schema')

class CatsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('cats', (table) => {
      table.increments()
      table.timestamps()
      table.string("Name",50).unique()
      table.string("Desc").nullable(false)
      table.integer("sid").unsigned()
      table.foreign("sid").references('id').on('shops')
      table.integer("parent_id").usigned()
      table.foreign("parent_id").references("id").on("cats")
      table.softDeletes()
    })
  }

  down () {
    this.drop('cats')
  }

}

module.exports = CatsTableSchema
