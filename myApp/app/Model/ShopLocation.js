'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")//,
//GeoRedis=use("App/Model/GeoRedis")

class ShopLocation extends Lucid {
   static get connection () {
    return 'mysql'
  }
  
  static boot(){
   super.boot()
   
   this.addHook("afterCreate",shlocation=>{
    /*yield skill.users().attach([(yield skill.suggested_by()).uid])
    Activity.current_user(yield skill.suggested_by())
    yield Activity.create({
      action_type:"created_skill",
      at:product.created_at,
      //callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })*/

   /* location=shlocation.location()
     GeoRedis.addLocation({shlocation.shop().name:
     { longitude:location.longitude,
      latitude:location.latitude
     }
   })*/
   
  }
  shop(){
    return this.belongsTo("App/Model/Shop","sid","sid")
  }
  
  location(){
    return this.belongsTo("App/Model/Location","locatid","locatid")
  }
}
module.exports = ShopLocation
