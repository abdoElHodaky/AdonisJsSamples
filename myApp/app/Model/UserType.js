
'use strict'

const Lucid = use('Lucid')

class UserType extends Lucid {

  static get connection () {
    return 'mysql'
  }
  suggested_by(){
   return this.belongsTo("App/Model/User","uid","uid")
  }
  users(){
   return this.belongsMany("App/Model/User","utid","uid","uid","utid").
   pivotModel("App/Model/TypedUser")
  }
}

module.exports = UserType
