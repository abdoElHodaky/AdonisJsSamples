
'use strict'

const Lucid,Wallet = use('Lucid'),use("App/Model/Wallet")

class Transfer extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static boot(){
   super.boot()
   this.addHook("afterCreate",transfer=>{
    yield rwallet=Wallet.findBy("address",transfer.receiver_address)
    yield wallet.credits().create({value:transfer.amount})
    yield swallet=Wallet.findBy("address",transfer.sender_address)
    yield wallet.credits().findBy({value:transfer.amount}).delete()
    
  }
  order(){
    return this.belongsTo("App/Model/Order",'oid','oid');
  }
  sender(){
     return this.belongsTo("App/Models/User","sender_uid","uid")
  }
  receiver(){
     return this.belongsTo("App/Models/User","receiver_uid","uid")
  }
}

module.exports = Transfer
