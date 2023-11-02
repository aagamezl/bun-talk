let obj = {
  id: '81506b73-52e8-4714-b508-ff3734d7b0ce',
  name: 'John Doe',
  email: 'john.doe@email.com',
  age: 32,
  isActive: true
}

const fns = [
  (n) => n % 2 === 0, // boolean
  (n) => n,           // number
  (n) => `${n}`,      // string
  // (_) => JSON.parse(JSON.stringify(obj)), // nested object
  (_) => obj, // nested object
]

// const FILE_NAME = "/tmp/bun-test-out";

for (let i = 0; i < 70; i++) {
  obj[`key${i}`] = fns[i % fns.length](Date.now());

  // Deno requires the use of async/await when reading and writing files.
  // await Deno.writeTextFile(FILE_NAME, JSON.stringify(obj));
  // const data = await Deno.readTextFile(FILE_NAME)
  // obj = JSON.parse(data);
  // obj = JSON.parse(JSON.stringify(obj))
}

// console.log(obj);
