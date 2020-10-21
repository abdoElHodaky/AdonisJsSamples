'use strict'

const Lucid = use('Lucid')

class Notification extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot() {
    super.boot()
    this.addHook("afterCreate",notification=>{
     users=yield use("App/Model/User").ids().filter(v=>notification.by_uid!=v)
     users=users.map(v=>v={uid:v})
     yield notifications.users().createMany(users)
     //yield notification.users().attach((yield use("App/Model/User").ids())
     //.filter(v=>notification.by_uid!=v))
    })
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   activity(){
    return this.hasOne("App/Model/Activity","notificid","notificid")
   
   }
   users(){
    return this.belongsMany("App/Model/User","uid","notificid","notificid","uid").
    pivotModel("App/Model/NotificationUser")
   }
}

module.exports = Notification
