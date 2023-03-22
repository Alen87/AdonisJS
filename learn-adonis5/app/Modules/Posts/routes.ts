import Route from '@ioc:Adonis/Core/Route'


Route.get('/posts',()=>{
    return 'listing posts'
  }) 
  
  Route.get('/posts/:id',async ({params})=>{
    return `get single post with an id of ${typeof params.id}`
  })
  
  Route.post('/posts',async ()=>{
    return 'creating a post'
  }) 
  
  Route.put('/posts/:id',async ({params})=>{
    return `updating a post with an id of ${params.id}`
  }) 
  
  Route.delete('/posts/:id',async({params})=>{
    return `deleting a post with an id of ${params.id}`
  }) 
  
  
  Route.get('/posts/topics/:topic?', async ({params})=>{
    return `topic is ${params.topic}`
  }).where('topics' , Route.matchers.slug())

  // Route.any('/posts', async()=>{})