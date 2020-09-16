'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
Route.get("/Logout","UserController.logout")
Route.resource("User","UserController").addCollection("login", ['POST'])
Route.resource("User.payments","PaymentController")
Route.post("/events/:evtid/user","Event Controller.User")
Route.resource("events","EventController")
Route.resource("Product","ProductController").addCollection("compare",['GET','POST'])
Route.resource("Product.specs","ProductSpecController")
Route.resource("Product.comments","ProductCommentController")
Route.resource("Product.attachments","ProductAttachmentController")
Route.resource("Offer","OfferController")
Route.resource("Shop","ShopController")
Route.resource("Cart","CartController")
