'use strict'

const Lucid = use('Lucid')

class Follower extends Lucid {

  static get connection () {
    return 'mysql'
  }
  
}

module.exports = Follower
