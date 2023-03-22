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

import 'App/Modules/Posts/routes'

Route.where('id',{
  match:/^[0-9]+$/,
  cast:(id)=>Number(id)
})


Route.get('/img/:userId/*',async({params})=>{
  return params
})



Route.get('/', async ( ctx ) => {
  return ctx.view.render('welcome')
})


Route.get('/posts', async ()=>'listing posts')
Route.get('/posts/:id', async ({params}) =>`get songle post with an id of ${typeof params.id}`)
Route.post('/post', async ()=> 'creating a post')
Route.put('/posts/:id', async ({params})=> `updating a post with an id of ${params.id}`)
Route.delete('/posts/:id' , async (ctx)=>`deleting a post with an id of ${ctx.params.id}`)

Route.get('/posts/topics/:topic?',({params}) => `topic is ${params.topic}`).where('topic',Route.matchers.slug())


Route.on('/testing').redirectToPath('https://duckduckgo.com')

