'use strict'

const Schema = use('Schema')

class ShopsLocationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('shops_locations', (table) => {
      table.increments("locatsid")
      table.timestamps()
      table.integer("sid").unique()
      table.foreign("sid").references("sid").on("shops")
      table.integer("locatid")
      table.foreign("locatid").references("locatid").on("locations")
      table.softDeletes()
    })
  }

  down () {
    this.drop('shops_locations')
  }

}

module.exports = ShopsLocationsTableSchema
