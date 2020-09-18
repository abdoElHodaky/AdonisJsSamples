'use strict'

const Lucid = use('Lucid')

class Activity extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot() {
    super.boot()
    this.addHook("beforeCreate",(activity)=>{
      yield Notification.crate({actid:activity.actid})
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
