'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")//,
//GeoRedis=use("App/Model/GeoRedis")

class UserLocation extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  
   static boot(){
   super.boot()
   this.addHook("afterCreate",userlocation=>{
  /*  yield skill.users().attach([(yield skill.suggested_by()).uid])
    Activity.current_user(yield skill.suggested_by())
    yield Activity.create({
      action_type:"created_skill",
      at:product.created_at,
      //callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })*/
    /* GeoRedis.addLocation({
       userlocation.user().name:{
        latitude:userlocation.location().latitude,
        longitude:userlocation.location().longitude
       }
     })*/
   })
  }

  user(){
    return this.belongsTo("App/Model/User","suggested_by","uid")
  }
  
  location(){
    return this.belongsTo("App/Model/Location","locatid","locatid")
  }
}
module.exports = UserLocation
