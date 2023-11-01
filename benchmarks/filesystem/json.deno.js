let obj = {};

const fns = [
  (n) => n % 2 === 0, // boolean
  (n) => n,           // number
  (n) => `${n}`,      // string
  (_) => JSON.parse(JSON.stringify(obj)), // nested object
];

const FILE_NAME = "/tmp/bun-test-out";

for (let i = 0; i < 70; i++) {
  obj[`key${i}`] = fns[i % fns.length](Date.now());

  // Deno requires the use of async/await when reading and writing files.
  await Deno.writeTextFile(FILE_NAME, JSON.stringify(obj));
  const data = await Deno.readTextFile(FILE_NAME)
  obj = JSON.parse(data);
}

console.log(obj);
