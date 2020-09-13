
'use strict'

const Lucid = use('Lucid')

class Event extends Lucid {

  static get connection () {
    return 'mysql'
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
