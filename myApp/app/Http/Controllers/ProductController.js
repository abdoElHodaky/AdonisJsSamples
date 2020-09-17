'use strict'
const Product=use("App/Model/Product");
class ProductController {

  * index(request, response) {
    console.log();
    response.json(yield Product.all())
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post()
    var createdProduct=yield shop.products().create({
      Name:inputs.Name,
      Price:inputs.price,
      Quantity:inputs.quantity,
      cid:inputs.Cat,
      Image:inputs.avatar
    });
    for (var i = 0; i < inputs.SpecName.length; i++) {
      yield createdProduct.specs().create({
        Name:inputs.SpecName[i],
        Value:inputs.SpecValue[i],
        pid:createdProduct.id
      })
    }
    response.redirect("back")
  }

  * show(request, response) {
    //
     var product=Product.find(request.params().id)
     response.json(product.loadMany((["specs","specs.childern","comments","offers","attachments","children","visits"]))
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }
  * visits(request,response){
     var product=Product.find(request.params().id)
     product.visits().attach([(yield Visit
     .create({"uid":(request.auth.getUser().uid),
     "duration":request.post().duration})).visid])
   }
   *affiliate(request , response){
      var user=request.auth.getUser(),
      inputs=request.post(),
      affiliate={}
      if(user.types().findBy("uid"user.uid)=="affiliate")
      affiliate=yield Affiliate.findBy("affiliate_Code",inputs.affiliate_code)
      //affiliate.products().attch([])
    }
}

module.exports = ProductController
