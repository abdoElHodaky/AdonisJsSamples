'use strict'
const Shop=use("App/Model/Shop"),
User=use("App/Model/User")
class ShopController {

  * index(request, response) {
   /* var user=yield request.session.get("user")
    var type=user.type?user.type:"Client"
    if (user) {
      yield response.sendView("shops",{shops:(yield Shop.all()).toJSON(),type:type})
    } else {
      response.redirect("Home");
    }
    */
    response.json(yield Shop.query().with("cats").fetch())
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
   var inputs=request.post()
    /*var user=yield use("App/Model/User").
    findBy('id',(yield request.session.get("user")).id)
    var shop=yield user.shops().create({
      Name:inputs.Name,
      uid:user.id,
      Image:"//placehold.it/200/200"
    })
    for (var i = 0; i < inputs.CatName.length; i++) {
      yield shop.cats().create({
        Name:inputs.CatName[i],
        Desc:inputs.CatDesc[i],
        sid:shop.id
      })
    }
    response.redirect("back")*/
    var user=User.find(parseInt(request.session.get("user").uid))
    response.json(yield user.shops().create(inputs))
    
  }

  * show(request, response) {
    //
    //var user=yield request.session.get("user")
   // var id=request.params().id
   // var type=user.type?user.type:"Client"
    var shop=yield Shop.find(request.get().id)
   /* var cats=yield shop.cats();
    var products=[]
    if(request.get().cat){
      var cat=cats.find(c=>c.Name==request.get().cat);
      var ps= yield(use("App/Model/Product").all('cid',cat.id))
      for (var product of ps) {
        products.push({
            Name:product.Name,
            Price:product.Price,
            specs:yield product.specs(),
            Image:product.Image
        })
      }
    }
    else{
      var ps=yield use("App/Model/Product").all()
      for (var product of ps) {
        products.push({
            Name:product.Name,
            Price:product.Price,
            specs:yield product.specs(),
            Image:product.Image,
            id:product.id
        })
      }
    }
    yield response.sendView('shop',{cats:cats,shop:shop,products:products,type:type})*/
    response.json(yield shop.loadMany("cats","products","followers","ordered"))
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

}

module.exports = ShopController
