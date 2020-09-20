'use strict'

const Schema = use('Schema')

class SkillsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('skills', (table) => {
      table.increments("skillid")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("suggested_by").unique()
      table.foreign("suggested_by").references("uid").on("users")
      table.integer("parent_id")
      table.foreign("parent_id").references("skillid").on("skills")
      table.softDeletes()
    })
  }

  down () {
    this.drop('skills')
  }

}

module.exports = SkillsTableSchema
