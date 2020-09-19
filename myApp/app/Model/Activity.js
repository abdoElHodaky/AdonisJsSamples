'use strict'

const Lucid = use('Lucid')

class Activity extends Lucid {
  static current_user(user){
   Activity.current_user=user
  }
  static get connection () {
    return 'mysql'
  }
   static get dates () {
    return super.dates.concat(['at'])
  }
  
   static castDates (field, value) {
    if (field==="at") {
      return `${value.fromNow()}`
    }
    return super.formatDates(field, value)
  }

  static boot() {
    super.boot()
    this.addHook("beforeCreate",(activity)=>{
      activity.uid=Activity.current_user.uid
      yield use("App/Model/Notification").crate({actid:activity.actid,
      by_uid:Activity.current_user.uid})
    }))
   this.addHook("afterCreate",(activity=>{
      yield actvity.notification().associate(activity)
    }))
  }
  static get actions(type,id){
   var actions=JSON.parse(yield Activity.query().where({
     "uid":id
    }).fetch().actions);
    return actions.filter(act=>act.type==type)
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
   notification(){
    return this.belongsTo("App/Model/Notification","notificid","notificid")
   
   }
}

module.exports = Activity
