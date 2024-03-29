import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class RouteProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
    const Route =this.app.container.use('Adonis/Core/Route')

    Route.Route.macro('mustBeSinged', function (){
      this.middleware(async (ctx,next)=>{
        if(!ctx.request.hasValidSignature()){
          return ctx.response.badRequest('Invalid signature')
        }
          
            await next


      })
        return this

    })


    Route.RouteGroup.macro('mustBeSinged', function (){
      this.middleware(async (ctx,next)=>{
        if(!ctx.request.hasValidSignature()){
          return ctx.response.badRequest('Invalid signature')
        }
          
            await next


      })
        return this

    })
       


    Route.BriskRoute.macro('goHome', function(){
      this.redirect('/')

      return this
    })



    Route.RouteResource.macro('mustBeSinged',function(){
      this.middleware({
        '*':async(ctx,next)=>{
          if(!ctx.request.hasValidSignature()){
            return ctx.response.badRequest('Invalid signature')
          }

           await next

        }
         

      })

       return this

    })


    Route.RouteMatchers.macro('alphaString',function(){
      return {
        match: /^[a-z]+$/i
       
      }
    
    })






  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
