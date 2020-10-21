
'use strict'

const Lucid = use('Lucid')

class TypedUser extends Lucid {

  static get connection () {
    return 'mysql'
  }
  user(){
   return this.belongsTo("App/Model/User","uid","uid")
  }
  user_type(){
   return this.belongsTo("App/Model/UserType","utid","utid")
  }
}

module.exports = TypedUser
