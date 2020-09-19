'use strict'

const Lucid = use('Lucid'),
Activity=use("App/Model/Activity")

class ProductComment extends Lucid {

  static get connection () {
    return 'mysql'
  }
   static boot(){
    super.boot()
    this.addHook("afterCreate",productcomment=>{
      Activity.current_user(yield productcomment.offer().user())
      yield Activity.create({
        action_type:"created_comment on product_".concat(productcomment.product().name),
        at:productcomment.comment().created_at,
        callback_url:use("Route").route("ProductCommentController.show",{commid:productcomment.commid})
       })
    })
  }

  
   comment(){
    return this.belongsTo("App/Model/Comment","commid","commid")
  }
  product(){
    return this.belongsTo("App/Model/Product","pid","pid")
  }
  
}

module.exports = ProductComment
