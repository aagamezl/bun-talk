const PORT = process.env.PORT ?? '3000'

const server = Bun.serve({
  port: PORT,
  fetch(request) {
    return Response.json({ hello: 'world' })
  },
})

console.log(`Listening on localhost:${PORT}`)
