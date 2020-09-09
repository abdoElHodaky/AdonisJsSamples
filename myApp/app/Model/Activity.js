'use strict'

const Lucid = use('Lucid')

class Activity extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return Activity.query().where({
     OnType:type,
     OnId:id
    });
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }
}

module.exports = Activity
