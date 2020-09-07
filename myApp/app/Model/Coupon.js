
'use strict'

const Lucid = use('Lucid')

class Coupon extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return Information.query().where({
     OnType:type,
     OnId:id
    });
}

module.exports = Coupon
