'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

   static current_user(user){
    Comment.current_user=user 
  }
  static boot(){
   super.boot()
   this.addHook("afterCreate",cat=>{
      yield use("App/Model/Activity").create({
       uid:Comment.by_uid,
       action_type:"created_comment",
       at:cat.created_at,
       callback_url:use("Route").route("CatController.show",{catid:cat.catid})
      })
   })
  }
  
  static get connection () {
    return 'mysql'
  }
  user(){
    return this.belongsTo("App/Model/User","uid","by_uid")
   }
  users(){
   // return this.hasMany("App/Model/User","uid","uid")
     return this.belongsMany("App/Model/User","uid","commid","commid","uid")
  }
  attachments(){
   // return this.manyThrough("App/Model/CommentAttachment","attachments","commid","aid")
    return this.belongsMany("commid","aid","aid","commid").pivotModel("App/Model/CommentAttachment")
   
   }
  comments(){
   return this.hasMany("App/Model/Comment","commid","parent_id")
  }
}
module.exports = Comment
