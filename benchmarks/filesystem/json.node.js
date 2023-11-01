import { readFileSync, writeFileSync } from 'fs'

let obj = {}

const fns = [
  (n) => n % 2 === 0, // boolean
  (n) => n,           // number
  (n) => `${n}`,      // string
  (_) => JSON.parse(JSON.stringify(obj)) // nested object
]

const FILE_NAME = '/tmp/bun-test-out'

for (let i = 0; i < 70; i++) {
  obj[`key${i}`] = fns[i % fns.length](Date.now())

  writeFileSync(FILE_NAME, JSON.stringify(obj))

  const data = readFileSync(FILE_NAME, { encoding: 'utf8'})
  obj = JSON.parse(data)
}

console.log(obj)
