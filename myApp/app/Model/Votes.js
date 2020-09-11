'use strict'

const Lucid = use('Lucid')

class Vote extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
      return return this.belongsTo("App/Models/User","OnId,"uid").where("OnType","users");
    }
  votes_users(){
      return return this.belongsTo("App/Models/VoteUser","votuid","votuid")
    }
   votes_products(){
      return return this.belongsTo("App/Models/VoteProduct","votpid","votpid")
    }
}

module.exports = Vote
