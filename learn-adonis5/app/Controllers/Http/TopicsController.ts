 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Topic from 'App/Models/Topic'

export default class TopicsController {

     public async index({response}:HttpContextContract){
        const topics= await Topic.all()
        const adonisjs = await Topic.findBy('name','AdonisJS')
        return response.json({adonisjs,topics})

     } 





    public async store ({request}:HttpContextContract){
       const data =request.only(['name','slug','description'])

       const topic = new Topic()

       topic.merge(data).save()
          
        //   const topic = await Topic.create(data)

        // const topics = await Topic.createMany([data])

        // const topic = await Topic.firstOrCreate({name:'JavaScript'},{
        //     name :'JavaScript',                                                   // ako nadje "name:'JavaScript' onda nista jer se to vec nalazi u bazi podataka, ako ne  nadje onda pohranjuje"
        //     slug:'JavaScript',
        //     description:'Description'
        // })


        // const topic = await Topic.updateOrCreate({name:'JavaScript',slug :'javascript'},{
        //      name :'JavaScript',                                                               // ako nadje "name:'JavaScript ili slug:'javascript updatea podatke ako ne  nadje onda stvara i pohranjuje"
        //      slug:'JavaScript',
        //      description:'Description'
        // })


        // const topics = await Topic.updateOrCreateMany('name',[{
        //       name :'JavaScript',                                                          // trazi "name" , ako nadje u bazi onda updatea , ako ne  stvara i pohranjuje , mozemo kreirati vise objekata...
        //       slug:'JavaScript',
        //       description:'Description'  
        // }]) 

          
       return topic;
    }
}
