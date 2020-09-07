'use strict'

const Lucid = use('Lucid')

class Attachment extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
}

module.exports = Cat
