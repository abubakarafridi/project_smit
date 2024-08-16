import {createServer} from 'http'

const server = createServer((req, res) => {
  res.end("hello");
});

server.listen(3000, ()=> {
  console.log("hellllllo worldddddd");
});