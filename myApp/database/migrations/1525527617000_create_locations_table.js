'use strict'

const Schema = use('Schema')

class LocationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('locations', (table) => {
      table.increments("locatid")
      table.timestamps()
      table.float("latitude",10,6)
      table.float("longitude",10,6)
      //table.integer("uid").unique()
      //table.foreign("uid").references("uid").on("users")
      table.integer("parent_id")
      table.foreign("parent_id").references("locatid").on("locations")
      table.softDeletes()
    })
  }

  down () {
    this.drop('locations')
  }

}

module.exports = LocationsTableSchema
