'use strict'

const Schema = use('Schema')

class SkillsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('users_skills', (table) => {
      table.increments("skilluid")
      table.timestamps()
      table.string("Name",50).unique()
      table.integer("suggested_by").unique()
      table.foreign("uid").references("uid").on("users")
      table.integer("skillid")
      table.foreign("skillid").references("skillid").on("skills")
      table.softDeletes()
    })
  }

  down () {
    this.drop('skills')
  }

}

module.exports = SkillsTableSchema
