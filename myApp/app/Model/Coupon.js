
'use strict'

const Lucid = use('Lucid')

class Coupon extends Lucid {

  static get connection () {
    return 'mysql'
  }
  /*static get on(type,{id}){
   return Information.query().where({
     OnType:type,
     OnId:id
    });
   cats(){
    return this.belongsMany("App/Model/Cat","OnId","cid","cid","OnId").
    where("OnType","cats")
   }
   users(){
    return this.manyThrough("App/Model/CouponUser","uid","uid")
   }*/
   users(){
    return this.belongsMany("App/Model/User","coupid","uid","uid","coupid")
   }
   products(){
    return this.hasMany("App/Model/OrderedProduct","coupid","coupid")
   }


}

module.exports = Coupon
