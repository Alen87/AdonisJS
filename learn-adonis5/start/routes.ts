/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.where('id',{
  match:/^[0-9]+$/,
  cast:(id)=>Number(id)
})


Route.get('/img/:userId/*',async({params})=>{
  return params
})



Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


Route.get('/test' ,async ()=>{
return 'working'
})





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

Route.on('/testing').redirectToPath('https://duckduckgo.com')

