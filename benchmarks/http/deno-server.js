const PORT = Deno.env.get('PORT') ?? '3000'

Deno.serve({
  port: parseInt(Deno.env.get('PORT') || PORT, 10),
  handler(req) {
    return Response.json({ hello: 'world' })
  },
})
