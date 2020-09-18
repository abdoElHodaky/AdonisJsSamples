
'use strict'

const Lucid = use('Lucid')

class Event extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static boot(){
    super.boot()
    this.addHook("afterCreate",event=>{
      yield use("App/Model/Activity").create({
        action:{
          type:"create_event",
          at:event.created_at,
          url:route("EventController.show",{evtid:event.evtid})
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
    .pivotTable("events_users")
  }
  
}

module.exports = Event
