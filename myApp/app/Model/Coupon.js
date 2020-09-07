
'use strict'

const Lucid = use('Lucid')

class Coupon extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get On(){}
}

module.exports = Coupon
