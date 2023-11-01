// Import the framework and instantiate it
import Fastify, { RouteGenericInterface } from 'fastify'

import { default as postsRoutes } from './routes/posts.routes'
import { default as profilesRoutes } from './routes/profiles.routes'
import { default as usersRoutes } from './routes/users.routes'

const fastify = Fastify({
  logger: true
})

fastify.register((instance, options, done) => {
  [...postsRoutes, ...profilesRoutes, ...usersRoutes].forEach((route) => {
    instance.route(route)
  })

  done()
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
