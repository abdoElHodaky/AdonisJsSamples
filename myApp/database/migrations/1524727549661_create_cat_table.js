'use strict'

const Schema = use('Schema')

class CatsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('cats', (table) => {
      table.increments("cid")
      table.timestamps()
      table.string("Name",50).unique()
      table.string("Desc").nullable(false)
      table.integer("sid").unsigned()
      table.foreign("sid").references('sid').on('shops')
      table.integer("parent_id").usigned().default(0)
      table.foreign("parent_id").references("cid").on("cats")
      table.softDeletes()
    })
  }

  down () {
    this.drop('cats')
  }

}

module.exports = CatsTableSchema
