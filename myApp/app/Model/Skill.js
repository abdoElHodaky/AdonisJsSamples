'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class Skill extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  
  static boot(){
   super.boot()
   this.addHook("afterCreate",skill=>{
    Activity.current_user(skill.suggested_by)
    yield Activity.create({
      action_type:"created_skill"
      at:product.created_at,
      //callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })
    
   })
  }

  users(){
    return this.belongsMany("App/Model/User","skillid","uid","uid","skillid").
    pivotTable("App/Model/UserSkill")
  }
  suggested_by(){
    return this.belongsTo("App/Model/User","suggested_by","uid")
  }
}
module.exports = Skill
