'use strict'

const Lucid = use('Lucid')

class Credit extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
  static merge(parent_id,children_ids){
   total=0
   parent=yield Credit.find(parent_id)
   children_ids.forEach(v=>{
    child=yield Credit.find(v)
    child.parent_id=parent_id
    yield child.save()
    total+=child.value
    yield child.associate(parent)
   })
    parent.value=total
    yield parent.save()
  }
  static boot(){
   super.boot()
   this.addHook("afterUpdate",credit=>{
     if(credit.used==true)
     { 
       credit.wallet().balance-=credit.value
       yield credit.wallet().save()
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
