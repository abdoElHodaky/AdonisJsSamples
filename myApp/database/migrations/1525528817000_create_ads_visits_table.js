'use strict'

const Schema = use('Schema')

class AdsVisitsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('visits_on_ads', (table) => {
      table.increments("adidvis")
      table.timestamps()
      table.integer("adid").unsigned()
      table.foreign("adid").references("adid").on("ads")
      table.integer("visid").unsigned()
      table.foreign("visid").references("visid").on("visits")
  }

  down () {
    this.drop('visits_on_ads')
  }

}

module.exports = AdsVisitsTableSchema

