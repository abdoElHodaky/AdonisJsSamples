'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity"),
GeoNear=use("geo-nearby")

class Location extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  
 /* static boot(){
   super.boot()
   this.addHook("afterCreate",skill=>{
    yield skill.users().attach([(yield skill.suggested_by()).uid])
    Activity.current_user(yield skill.suggested_by())
    yield Activity.create({
      action_type:"created_skill",
      at:product.created_at,
      //callback_url:use("Route").route("ProductController.show",{pid:product.pid})
    })
    
   })
  }*/

  shops(){
    return this.belongsMany("App/Model/Shop","locatid","sid","sid","locatid").
    pivotTable("App/Model/ShopLocation")
  }
  
  users(){
    return this.belongsMany("App/Model/User","locatid","uid","uid","locatid").
    pivotTable("App/Model/UserLocation")
  }
  suggested_by(){
    //return this.belongsTo("App/Model/User","suggested_by","uid")
  }
 nearBy(){
   var res=new GeoNear(yield Location.all().toJSON())
   return res.nearBy(this.latitude,this.longitude,5000)
 }
}
module.exports = Location
