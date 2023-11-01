import { createServer } from 'node:http'

const PORT = process.env.PORT ?? '3000'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ hello: 'world' }))
}).listen(parseInt(PORT, 10))

console.log(`Listening on localhost:${PORT}`)
