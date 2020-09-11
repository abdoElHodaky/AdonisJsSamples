'use strict'

const Lucid = use('Lucid')

class Message extends Lucid {

  static get connection () {
    return 'mysql'
  }

  users(){
    return this.hasMany("App/Model/User","uid","uid")
  }
  attachments(){
    //return this.manyThrough("App/Model/MessageAtt","uid","uid")
    return this.manyThrough("App/Model/Attachment","aid","aid")
  }
}
module.exports = Message
