'use strict'

const Lucid = use('Lucid')

class Credit extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
  static boot(){
   super.boot()
   this.addHook("afterUpdate",credit=>{
     if(credit.used==true)
     { 
       credit.wallet().balance-=credit.value
       credit.wallet().save()
     }
   })
  }

  client(){
  	return this.belongTo("App/Model/User","uid","uid");
  }
  wallet(){
    return this.belongsTo("App/Model/Wallet","wallid","wallid")
  }
  credits(){
     return this.hasMany("App/Model/Credit","credid","parent_id")
   }
  parent(){
     return this.belongsTo("App/Model/Credit","parent_id","credid")
  }
  
}

module.exports = Credit
