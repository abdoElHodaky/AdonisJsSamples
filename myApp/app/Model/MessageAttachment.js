'use strict'

const Lucid = use('Lucid')

class MessagesAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachment(){
    //return this.hasMany("App/Model/Attachment","aid","aid")
      return this.belongsTo("App/Model/Attachment","aid","aid")
   }
   messages(){
    return this.belongsTo("App/Model/Message","mesgid","mesgid")
  }
  
}

module.exports = MessagesAttachment
