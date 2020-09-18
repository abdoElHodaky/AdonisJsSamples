'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  
  
 static get connection () {
    return 'mysql'
  }
  static current_user(user){
    Cat.current_user=user 
  }
  static boot(){
   super.boot()
   this.addHook("afterCreate",cat=>{
      yield use("App/Model/Activity").create({
       uid:Cat.current_user.uid,
       action_type:"create_category",
       at:cat.created_at,
       callback_url:use("Route").route("CatController.show",{catid:cat.catid})
      })
   })
  }
  static castDates (field, value) {
    if (field.contains("at")==true) {
      return `${value.fromNow()}`
    }
    return super.formatDates(field, value)
  }

  shop(){
  	return this.belongsTo("App/Model/Shop",'sid','sid');
  }
  childern(){
  	return this.hasMany("App/Models/Cat","parent_id","cid")
  }
  products(){
   return this.hasMany("App/Models/Product","cid","cid")
  }
  
}

module.exports = Cat
