import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { singninInput, singnupInput } from "medium-common-week17"

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


userRouter.post('/signup', async (c) => {


    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = singnupInput.safeParse(body)
    if (!success) {
        c.status(411);
        return c.json({
            msg: "inputs are not correct(ZOD error)"
        })
    }

    try {

        const user = await prisma.user.create({
            data: {
                name:body.name,
                username: body.username,
                password: body.password
            },
        })
        console.log("the user is----------",user)
        const token = await sign(
            {
                id: user.id,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
            },
            c.env.JWT_SECRET)
        return c.json({
            jwt: token,
            user_name:user
        })

    } catch (error) {
        console.log(error)
        return c.text("invalid data or user already existed")
    }


})



userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({

        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = singninInput.safeParse(body)
    if (!success) {
        c.status(411);
        return c.json({
            msg: "inputs are not correct"
        })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: body.username,
                password: body.password
            }
        })

        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }

        const jwt = await sign(
            {
                id: user.id,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
            },
            c.env.JWT_SECRET)
        return c.json({
            jwt,
            user_name:user.name
        })
    } catch (error) {
        console.log(error)

    }

})

