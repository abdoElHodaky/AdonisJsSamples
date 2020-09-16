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
  *visits(request,response){
     var product=Product.find(request.params().id)
     product.visits().attach([(yield Visit
     .create({"uid":(request.auth.getUser().uid),
     "duration":request.post().duration})).visid])
   }

  * compare(request, response) {
    //
    var inputs=request.post()
    var Names=inputs.products
    var products=[],specs=[]
    for (var Name of Names) {
      var product=yield Product.findBy("Name",Name)
      specs.push(yield product.specs())
      products.push(product);
    }
    var ComparedProducts=[]
    for (var product of products) {
      var p={
        Name:product.Name,
        price:product.Price,
        Image:product.Image,
        specs:yield product.specs()
        ,cat:(yield product.cat())[0].Name
      }
      ComparedProducts.push(p)
    }
    //console.log(ComparedProducts);
    //response.send(ComparedProducts);
    yield response.sendView("compare",{ComparedProducts:ComparedProducts})
  }
}

module.exports = ProductController
