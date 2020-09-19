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
   products(){
      return this.belongsMany("App/Models/Product","votid,"pid","votid","pid")
      .pivotModel("App/Model/VoteProduct");
   }
}

module.exports = Vote
