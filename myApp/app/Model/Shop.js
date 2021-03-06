'use strict'

const Lucid = use('Lucid'),
//GeoRedis=use("App/Model/GeoRedis"),
//GeoShops=GeoRedis.addSet("ShopLocations")

class Shop extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  static boot(){
   super.boot()
  }
  setReleation(name){
   return this[name]
  }
  getReleation(name){
   return this[name]().fetch()
  }
   
   cats(){
     return this.hasMany("App/Model/Cat",'sid','sid')
  }
  products(){
    return this.manyThrough("App/Model/Cat","products","sid","cid");
  }
  
  coupons(){
    return this.hasMany("App/Model/Coupon","sid","sid");
  }
   types(){
    return this.belongsMany("App/Model/TypeShop","shptype_id","sid","sid","shptype_id");
  }
  followers(){
   return this.manyThrough("App/Model/ShopFollower","followers","sid","follid");
  }
  ordered_products(){
   return this.products().ordered();
  }
  locations(){
    return this.belongsMany("App/Model/Location","sid","locatid","locatid","sid").
    pivotTable("App/Model/ShopLocation")
  }
}

module.exports = Shop
