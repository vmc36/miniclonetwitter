import Router from '@koa/router'
import { PrismaClient } from '@prisma/client'



const prisma= new PrismaClient()

export const router = Router()

router.get ('/tweets', async ctx =>{
   const tweets = await prisma.tweet.findMany()
   ctx.body = tweets
})

router.post ('/tweets', async ctx =>{
   const tweet =  await prisma.tweet.create({
      data: {
          userId: 'cl43cksij0027sov81ieyj4ih',
          text: ctx.request.body.text
      } 
    })

    ctx.body = tweet
})

router.post ('/signup', async ctx =>{
    const user = await prisma.user.create({
        data: {
            name: ctx.request.body.name,
            username:request.body.username,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
        }
    })
    ctx.body = user
})



