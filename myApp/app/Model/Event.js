
'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class Event extends Lucid {
   
  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterCreate",event=>{
      Activity.current_user(event.user())
      yield Activity.create({
        action:{
          action_type:"created_event",
          at:event.created_at,
          callbackurl:route("EventController.show",{evtid:event.evtid})
         }
       })
     })
   }
  user(){
  	return this.belongsTo("App/Models/User",'uid','uid');
  }
  
  users(){
   return this.belongsMany("App/Model/User"
   ,"evtid","uid","uid","evtid")
    .pivotModel("App/Model/EventUser")
  }
  
}

module.exports = Event
