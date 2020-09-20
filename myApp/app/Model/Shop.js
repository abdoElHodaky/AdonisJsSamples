'use strict'

const Lucid = use('Lucid')

class Shop extends Lucid {

  static get connection () {
    return 'mysql'
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
