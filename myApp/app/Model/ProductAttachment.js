'use strict'

const Lucid = use('Lucid')

class ProductAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    //return this.hasMany("App/Model/Attachment","aid","aid")
    return this.belongsTo("App/Model/Attachment","aid","aid")
  
   }
   product(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductAttachment
