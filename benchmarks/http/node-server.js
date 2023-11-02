import { createServer } from 'node:http'

const PORT = process.env.PORT ?? '3000'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
    name: 'John Doe',
    email: 'john.doe@email.com',
    age: 32,
    isActive: true
  }))
}).listen(parseInt(PORT, 10))

console.log(`Listening on localhost:${PORT}`)
