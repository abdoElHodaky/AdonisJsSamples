'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

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
      Activity.current_user(Cat.current_user)
      yield Activity.create({
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
