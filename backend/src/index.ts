import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRoutes } from './routes/blog';
import { cors } from 'hono/cors';

// import { env } from 'hono/adapter';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();

app.use('/*',cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRoutes)




export default app
