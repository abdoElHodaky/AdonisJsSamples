'use strict'

const Lucid = use('Lucid')

class Information extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return Information.query().where({
     OnType:type,
     OnId:id
    });
  }
  order(){
    this.belongsTo("App/Model/Order","OnId","oid").where("OnType","orders")
  }
  user(){
    this.belongsTo("App/Model/Info","OnId","uid").where("onType","users")
  }
  
  
}

module.exports = Information
