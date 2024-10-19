import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { create_bloginput, update_bloginput } from "medium-common-week17";

export const blogRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
        
    },
    Variables: {
        userId:string;
    }
}>();

blogRoutes.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        c.set("userId", user.id as string);
        await next();
    } else {
        c.status(403)
        return c.json({
            msg: "you are not logged in"
        })
    }
})


blogRoutes.post('/newblog', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    const author_id=c.get("userId")

    const body = await c.req.json()
    const{success}=create_bloginput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({
            msg:"inputs are not correct"
        })
    }

    try {
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: author_id
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (error) {
        console.log(error)

    }
})

blogRoutes.put('/update', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const{success}=update_bloginput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({
            msg:"inputs are not correct"
        })
    }
    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (error) {
        console.log(error)

    }
})
blogRoutes.get('/getblog/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param("id")
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: String(id)
            }
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411);
        return c.json({
            msg: "error while fetching blog post"
        })

    }
})
blogRoutes.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.blog.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                createdAt:true,
                updatedAt:true,
                author: {                                                                                                                                                                          
                  select: {
                    name: true
                  }                                                                                           
                }
              }
        })
        return c.json({
            blogs
        })
    } catch (error) {
        console.log(error)

    }
})



