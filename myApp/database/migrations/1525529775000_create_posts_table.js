'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  static get connection () {
    return 'mysql'
  }

  up () {
    this.create('posts', (table) => {
      table.increments("postid")
      table.timestamps()
      table.integer("uid").unsigned()
      table.foreign("uid").references("uid").on("users")
     // table.enu("post_type",["file","url","thumbnail","emoji"])
      table.binary("post_content")
      })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
