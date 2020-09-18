'use strict'

const Lucid = use('Lucid')

class NotificationUser extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot() {
    super.boot()
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   notification(){
    return this.belongsTo("App/Model/Notification","notificid","notificid")
   
   }
}

module.exports = NotificationUser
