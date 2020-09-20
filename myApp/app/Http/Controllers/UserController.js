'use strict'
const User=use("App/Model/User"),Client=use("App/Model/Client");
class UserController {

  * index(request, response) {
    //
    yield response.sendView("welcome")
  }

  * create(request, response) {
    //

  }

  * store(request, response) {
    //
    var inputs=yield request.post();
    
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

  * login(request, response) {
    //
    var inputs=inputs=yield request.post(),
    token=""
    if(!request.auth.check()&& "Authorization" in request.headers())
      token=yield request.auth.attempts(inputs.user)|| request.auth.getAuthHeader()
   var device=request.auth.getUser().devices().findBy("token",inputs.device_token)
    response.json({tokens:[
    {access_token:token},
    {devce_token:device token}]})
  }
  *logout(request,response){
    var user=request.auth.getUser()
    device=request.auth.getUser().devices().findBy("token",inputs.device_token)
    if(device.allow_login==true && device.remember==true){
      response.json({})
    }
    if(device.allow_login==true && device.remember==false){
      device.remember=false
      device.save()
      yield request.auth.authenticator("api").revokeTokensForUser(user)
      response.json({})
    }
  }
  *shops_following(request , response){
    var user=request.auth.getUser()
    response.json (user.shops_followings().sync(use("App/Model/Shop").ids()))
  }
  *events(request , response){
     
  }

}

module.exports = UserController
