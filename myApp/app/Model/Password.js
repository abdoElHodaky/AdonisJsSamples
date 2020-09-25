'use strict'

const Lucid = use('Lucid')

class Password extends Lucid {

  static get connection () {
    return 'mysql'
  }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   emails(){
    return this.manyThrough("App/Model/User","emails","passid","emid")
   }
}

module.exports = Password
