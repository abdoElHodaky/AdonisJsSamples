'use strict'

const Lucid = use('Lucid')

class Vote extends Lucid {

  static get connection () {
    return 'mysql'
  }
  users(){
      return this.belongsMany("App/Models/User","votid,"uid","votid","uid")
      .pivotModel("App/Model/VoteUser");
    }
 /* votes_users(){
      return this.belongsTo("App/Models/VoteUser","votuid","votuid")
    }*/
   votes_products(){
      return return this.belongsTo("App/Models/VoteProduct","votpid","votpid")
    }
}

module.exports = Vote
