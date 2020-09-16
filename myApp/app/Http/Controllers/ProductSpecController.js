'use strict'
const Product=use("App/Model/Product");
class ProductSpecController {

  * index(request, response) {
    var product=Product.find(request.params().pid)
    response.json(yield product.specs().load("children"))
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    var inputs=request.post()
    var specs=yield Product.find(request.params().pid).specs().findOrCreate(request.get().specid,{
      Name:inputs.Name,
      Value:input.value
    });
    if(recursive) yield specs.children()
     .createMany(inputs.children)
    response.json(yield specs.load("children"))
  }

  * show(request, response) {
    //
     var product=Product.find(request.params().id)
     response.json(product.loadMany((["specs","specs.childern","comments"]))
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
      var product=Product.find(request.params().pid)
      response.json(product.specs()
     .where({"specid":request.params().specid}).
     update(request.post()))
  }

  * destroy(request, response) {
    //
  }


}

module.exports = ProductSpecController
