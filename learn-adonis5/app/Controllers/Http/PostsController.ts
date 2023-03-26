import { inject } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DateService from 'App/Service/DateService'


@inject()
export default class PostsController {
  
  
    public dateService = DateService
  


  public async index({}: HttpContextContract) {
    return 'listing posts'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
     const dateTime=DateService.toDateTime()
     const formattedDate = this.dateService.toDate(dateTime)
    
    return `creating a post ${formattedDate}`
  }

  public async show({params}: HttpContextContract) {
    return `get single post with an id of ${typeof params.id}`
  }

  public async edit({}: HttpContextContract) {}

  public async update({params}: HttpContextContract) {
    return `updating a post with an id of ${params.id}`
  }

  public async destroy(ctx: HttpContextContract) {
    return `deleting a post with an id of ${ctx.params.id}`
  }
}
