
import Route from '@ioc:Adonis/Core/Route'



Route.group(()=>{
    Route.group(()=>{
      Route.group(()=>{
        Route.get('/', async ()=>'listing posts').as('index')
      Route.get('/:id', async ({params}) =>`get songle post with an id of ${typeof params.id}`).as('show')
      Route.post('/', async ()=> 'creating a post').as('store')
      Route.put('/:id', async ({params})=> `updating a post with an id of ${params.id}`).as('update')
      Route.delete('/:id' , async (ctx)=>`deleting a post with an id of ${ctx.params.id}`).as('destroy')
  
      }).prefix('/posts').as('posts')
    }).prefix('/v1').as('v1')
  }).prefix('/api').as('api')
  