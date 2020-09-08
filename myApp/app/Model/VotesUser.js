'use strict'

const Lucid = use('Lucid')

class VotesUser extends Lucid {

  static get table(){
    return "votes_on_users"
   }
  static get connection () {
    return 'mysql'
  }
   votes(){
    return this.hasMany("App/Model/Votes","votid","votid")
   }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  
}

module.exports = VotesUser
