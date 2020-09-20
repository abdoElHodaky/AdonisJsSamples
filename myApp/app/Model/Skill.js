'use strict'

const Lucid = use('Lucid')

class Skill extends Lucid {
  
  static get connection () {
    return 'mysql'
  }
  
  static boot(){
   super.boot()
   
  }

  users(){
    return this.belongsMany("App/Model/User","skillid","uid","uid","skillid").
    pivotTable("App/Model/UserSkill")
  }
}
module.exports = Skill
