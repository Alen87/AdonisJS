declare module '@ioc:Adonis/Core/Route'{
    interface RouteContract{
        mustBeSigned():this
    }

      
    interface RouteGroupContract{
        mustBeSinged():this
    }



    interface BriskRouteContract{
        goHome():this
    }




    interface RouteResourceContract {
        mustBeSinged():this
    } 


    interface RouteMatchersContract{
        alphaString():{match:RegExp}
    }


}