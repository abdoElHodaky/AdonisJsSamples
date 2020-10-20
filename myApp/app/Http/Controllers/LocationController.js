'use strict'
const Location=use("App/Model/Location")

class LocationController {
   
    static adminCount=0
  * index(request, response) {
    //
    yield response.sendView("welcome")
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    
    
     
  }

  * show(request, response) {
    //
    
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
  
  * nearBy(request, response) {
    var location=request.auth.getUser().location()
    var locations=location.location().nearBy()
    response.json(locations.map(r=>{
      location=yield Location.findBy({longitude:r.longitude,latitude:r.latitude})
      yield location.shops().toJSON()
    }))
  }

  
}

module.exports = UserController
