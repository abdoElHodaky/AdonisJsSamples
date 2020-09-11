'use strict'

const Lucid = use('Lucid')

class MessagesAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.hasMany("App/Model/Attachment","aid","aid")
   }
   messages(){
    return this.belongsTo("App/Model/Message","mesgid","mesgid")
  }
  
}

module.exports = MessagesAttachment
