const PORT = process.env.PORT ?? '3000'

const server = Bun.serve({
  port: PORT,
  fetch(request) {
    return Response.json({
      id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
      name: 'John Doe',
      email: 'john.doe@email.com',
      age: 32,
      isActive: true
    })
  },
})

console.log(`Listening on localhost:${PORT}`)
