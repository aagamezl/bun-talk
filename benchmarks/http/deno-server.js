const PORT = Deno.env.get('PORT') ?? '3000'

Deno.serve({
  port: parseInt(Deno.env.get('PORT') || PORT, 10),
  handler(req) {
    return Response.json({
      id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
      name: 'John Doe',
      email: 'john.doe@email.com',
      age: 32,
      isActive: true
    })
  },
})
