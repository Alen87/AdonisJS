import Route from '@ioc:Adonis/Core/Route'


import postRoutes from './v2/posts'

Route.group(()=>{
  Route.group(async()=>{
    postRoutes()
    await require ('./v2/series')

  }).prefix('/v2').as('v2')
}).prefix('/api').as('api')
