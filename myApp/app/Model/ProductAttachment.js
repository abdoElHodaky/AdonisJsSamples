'use strict'

const Lucid = use('Lucid')

class ProductAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.hasMany("App/Model/Attachment","aid","aid")
   }
   products(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductAttachment
