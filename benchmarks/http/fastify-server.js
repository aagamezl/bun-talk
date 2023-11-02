import Fastify from 'fastify'
const fastify = Fastify({ logger: false })

fastify.get('/', (_, reply) => {
  return {
    id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
    name: 'John Doe',
    email: 'john.doe@email.com',
    age: 32,
    isActive: true
  }
})

fastify.listen({ port: 3000 })
