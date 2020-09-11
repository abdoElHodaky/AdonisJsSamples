'use strict'

const Lucid = use('Lucid')

class CommentAttachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   attachments(){
    return this.hasMany("App/Model/Attachment","aid","aid")
   }
  
}

module.exports = CommentAttachment
