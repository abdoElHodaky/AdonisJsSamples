'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class UserSkill extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  
  /*static boot(){
   super.boot()
   this.addHook("afterCreate",skill=>{
    Activity.current_user(skill.suggested_by)
    yield Activity.create({
      action_type:"created_skill",
      at:product.created_at,
      //callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })
    
   })
  }*/

  skill(){
    return this.belongsTo("App/Model/Skill","skillid","skillid")
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
}
module.exports = UserSkill
