'use strict'

const Lucid = use('Lucid')

class Follower extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
    return this.belongsMany("App/Model/User","follid","uid","uid","follid").
    pivotModel("App/Model/UserFollower")
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  
}

module.exports = Follower
