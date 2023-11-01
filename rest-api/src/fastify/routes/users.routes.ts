import { PrismaClient, User } from '@prisma/client'
import { RouteOptions } from 'fastify/types/route'

const prisma = new PrismaClient()

const routes: RouteOptions[] = [{
  method: 'GET',
  url: '/users',
  handler: async (request, reply) => {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })

    return users
  }
}, {
  method: 'GET',
  url: '/users/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const user = await prisma.user.findUnique({
      include: {
        posts: true,
        profile: true,
      },
      where: {
        id,
      },
    })

    return user
  }
}, {
  method: 'DELETE',
  url: '/users/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    try {
      const deleteUser = await prisma.user.delete({
        where: {
          id,
        },
      })

      if (!deleteUser) {
        return reply.statusCode = 404
      }

      return reply.statusCode = 204
    } catch (error) {
      return reply.send({ message: (error as Error).message })
    }
  }
}, {
  method: 'POST',
  url: '/users',
  schema: {

  },
  handler: async (request, reply) => {
    const user = await prisma.user.create({
      data: request.body as User,
      include: {
        posts: true,
        profile: true,
      }
    })

    reply.status(201).send(user)
  }
}, {
  method: 'PATCH',
  url: '/users/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: request.body as User,
    })

    return reply.status(200).send(updatedUser)
  }
}]

export default routes
