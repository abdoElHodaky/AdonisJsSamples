'use strict'

const Schema = use('Schema')

class EmailsVerificationsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('emails_verifications', (table) => {
      table.increments("emverfid")
      table.timestamps()
      table.boolean("verified")
       table.integer("verifid").unsigned()
       table.foreign("verifid").references("verifid").on("verifications")
     table.integer("emid").unsigned()
       table.foreign("emid").references("emid").on("emails")
        table.softDeletes()
    })
  }

  down () {
    this.drop('emails_verifications')
  }

}

module.exports = EmailsVerificationsTableSchema
