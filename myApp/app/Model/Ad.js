'use strict'

const Lucid = use('Lucid')

class Ad extends Lucid {

  static get connection () {
    return 'mysql'
  }

  /*users(){
    return this.hasMany("App/Model/User","uid","uid")
  }*/
  attachments(){
    return this.manyThrough("App/Model/AdAttachment","attachments","aid","aid")
   }
}
module.exports = Ad
