'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class EventUser extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static get table(){
     return "events_users"
   }

   static boot(){
    super.boot()
    this.addHook("afterCreate",eventuser=>{
      Activity.current_user(yield eventuser.user())
      yield Activity.create({
        action_type:`${eventuser.user().name} +" is " +${eventuser.status} ${eventuser.event().name}`
        eventuser.created_at,
        callback_url:use("Route").route("EventController.show",
        {evtid:eventuser.event().evtid})
       })
    })
  }

  
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  event(){
    return this.belongsTo("App/Model/Event","evtid","evtid")
  }
  
}

module.exports = EventUser
