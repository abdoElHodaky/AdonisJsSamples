'use strict'
const Ad=use("App/Model/Ad")
class AdController {

  * index(request, response) {
    
     response.json(yield Ad.all())
  }

  * create(request, response) {
    //
    
  }

  * store(request, response) {
    //
    var inputs=request.post(),
    user=yield request.auth.getUser()
    ,ad=yield user.ads().create(inputs)
    response.json(ad)

 }

  * show(request, response) {
    //
     
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
     
    )

  }

  * destroy(request, response) {
    //
  }

}

module.exports = AdController
