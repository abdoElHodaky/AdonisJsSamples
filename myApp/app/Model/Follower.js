'use strict'

const Lucid = use('Lucid')

class Follower extends Lucid {

  static get connection () {
    return 'mysql'
  }
  followers(){
    return this.belongsMany("App/Model/User","follid","uid","uid","follid")
  }
  
}

module.exports = Follower
