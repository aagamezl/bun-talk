const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
    name: 'John Doe',
    email: 'john.doe@email.com',
    age: 32,
    isActive: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
