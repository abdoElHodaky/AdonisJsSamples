'use strict'

const Lucid = use('Lucid')

class Information extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return Information.query().where({
    'on->"$.type"':type,
     'on->"$.id"':id
    });
  }
  order(){
    this.belongsTo("App/Model/OrderInfo","oid","oid")
  }
  user(){
    this.belongsTo("App/Model/UserInfo","uid","uid")
  }
  
  
}

module.exports = Information
