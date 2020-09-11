'use strict'

const Lucid = use('Lucid')

class Cat extends Lucid {

  static get connection () {
    return 'mysql'
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
  coupons(){
   return this.hasMany("App/Models/Coupon","cid","OnId").where("OnType","cats")
  }
}

module.exports = Cat
