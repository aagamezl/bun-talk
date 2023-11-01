import { PrismaClient, Profile } from '@prisma/client'
import { RouteOptions } from 'fastify/types/route'

const prisma = new PrismaClient()

const routes: RouteOptions[] = [{
  method: 'GET',
  url: '/profiles',
  handler: async (request, reply) => {
    const profiles = await prisma.profile.findMany({
      include: {
        user: true,
      },
    })

    return profiles
  }
}, {
  method: 'GET',
  url: '/profiles/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const profile = await prisma.profile.findUnique({
      include: {
        user: true,
      },
      where: {
        id,
      },
    })

    if (!profile) {
      reply.statusCode = 404
      reply.send()
    }

    return profile
  }
}, {
  method: 'DELETE',
  url: '/profiles/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }
    try {

      const profile = await prisma.profile.findUnique({
        where: {
          id,
        },
      })

      if (!profile) {
        return reply.statusCode = 404
      }

      await prisma.profile.delete({
        where: {
          id,
        },
      })

      return reply.statusCode = 204
    } catch (error) {
      return reply.status(500).send({ message: (error as Error).message })
    }
  }
}, {
  method: 'POST',
  url: '/profiles',
  schema: {

  },
  handler: async (request, reply) => {
    const { userId, bio } = request.body as Profile

    console.log(request.body);

    const profile = await prisma.profile.create({
      data: {
        bio,
        userId
      }
    })

    reply.status(201).send(profile)
  }
}, {
  method: 'PATCH',
  url: '/profiles/:id',
  handler: async (request, reply) => {
    const { id } = request.params as { id: string }

    const updatedProfile = await prisma.profile.update({
      where: {
        id,
      },
      data: request.body as Profile,
    })

    return reply.status(200).send(updatedProfile)
  }
}]

export default routes
