
'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class Coupon extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static boot(){
    super.boot()
    this.addHook("afterCreate",coupon=>{
      Activity.current_user(yield coupon.user())
      yield Activity.create({
        action_type:"created_coupon by user_".concat(coupon.user().name),
        at:coupon.created_at,
        callback_url:use("Route").route("CouponController.show",
        {coupid:coupon.coupid})
       })
    })
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
    return this.belongsMany("App/Model/User","coupid","uid","uid","coupid").
    pivotModel("App/Model/CouponUser")
   }
   products(){
    return this.hasMany("App/Model/OrderedProduct","coupid","coupid")
   }
   user(){
    return this.belongsTo("App/Model/User","uid","uid")
   }

}

module.exports = Coupon
