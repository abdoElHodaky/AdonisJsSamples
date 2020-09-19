
'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class UserFollower extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static boot(){
    super.boot()
    this.addHook("afterCreate",userfollower=>{
      Activity.current_user(yield userfollower.follower())
      yield Activity.create({
        action_type:"created_follower on user_".concat(userfollower.user().name),
        at:userfollower.follower().created_at,
        callback_url:use("Route").route("UserFollowerController.show",{follid:productcomment.commid})
       })
    })
  }

  
   follower(){
    return this.belongsTo("App/Model/Follower","follid","follid")
  }
  user(){
    return this.belongsTo("App/Model/User","uid","uid")
  }
  
}

module.exports = UserFollower
