'use strict'

const Lucid = use('Lucid')

class Attachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get on(type,{id}){
   return AdditionalInformation.query().where({
    'on->"$.type"':type,
     'on->"$.id"':id
    }).fetch();
  }
  
}

module.exports = Cat
