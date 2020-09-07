'use strict'

const Lucid = use('Lucid')

class Attachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
  static get On(type,{id}){
   
  }
  
}

module.exports = Cat
