import Fastify from 'fastify'
const fastify = Fastify({ logger: false })

fastify.get('/', (_, reply) => {
  return { hello: 'world' }
})

fastify.listen({ port: 3000 })
