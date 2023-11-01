import { Post, Prisma, PrismaClient } from '@prisma/client'
import { RouteOptions } from 'fastify/types/route'

const prisma = new PrismaClient()

const routes: RouteOptions[] = [{
  method: 'GET',
  url: '/posts',
  handler: async (request, reply) => {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    })

    return posts
  }
}, {
  method: 'GET',
  url: '/posts/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const post = await prisma.post.findUnique({
      include: {
        author: true,
      },
      where: {
        id,
      },
    })

    if (!post) {
      reply.statusCode = 404
      reply.send()
    }

    return post
  }
}, {
  method: 'DELETE',
  url: '/posts/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }
    try {
      const deletePost = await prisma.post.delete({
        where: {
          id,
        },
      })

      if (!deletePost) {
        return reply.statusCode = 404
      }

      return reply.statusCode = 204
    } catch (error) {
      return reply.send({ message: (error as Error).message })
    }
  }
}, {
  method: 'POST',
  url: '/posts',
  schema: {

  },
  handler: async (request, reply) => {
    const post = await prisma.post.create({
      data: request.body as Prisma.PostCreateInput
    })

    reply.status(201).send(post)
  }
}, {
  method: 'PATCH',
  url: '/posts/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: request.body as Prisma.PostUpdateInput,
    })

    return reply.status(200).send(updatedPost)
  }
}]

export default routes
