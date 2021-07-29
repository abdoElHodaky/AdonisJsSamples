'use strict'

const Schema = use('Schema')

class ScoresTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('scores', (table) => {
      table.increments("scorid")
      table.timestamps()
      table.decimal("value")
      table.boolean("negative").default("false")
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
      table.integer("parent_id").unsigned()
      table.foreign("parent_id").references("scorid").on("scores")
     
  }

  down () {
    this.drop('scores')
  }

}

module.exports = ScoresTableSchema
