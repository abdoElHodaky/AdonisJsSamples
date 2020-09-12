'use strict'

const Lucid = use('Lucid')

class AdAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.hasMany("App/Model/Attachment","aid","aid")
   }
   ads(){
    return this.belongsTo("App/Model/Ad","adid","adid")
  }
  
}

module.exports = AdAttachment
