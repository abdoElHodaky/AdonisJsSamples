'use strict'

const Lucid = use('Lucid')

class Notification extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot() {
    super.boot()
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   activity(){
    return this.hasOne("App/Model/Notification","notificid","notificid")
   
   }
   users(){
    return this.belongsMany("App/Model/User","uid","notificid","notificid","uid").
    pivotTable("notifications_users")
   }
}

module.exports = Activity
