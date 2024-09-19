import { createServer} from "node:http"

const PORT = 3000;

const server = createServer((req,res) => {
    const url = req.url;
    
    if (url === "/") {
        res.writeHead(200, {'content-Type' : "text/plain"})
        res.end("Welcome to Home Page")
    }
    else if (url === "/about") {
        res.writeHead(200, {'content-Type' : "text/plain"})
        res.end("Welcome to about Page")
    }
    else {
        res.writeHead(404, {'content-Type' : "text/plain"})
        res.end("404 Not Found")
    }
})

server.listen(PORT, () => {
    console.log("hi");
})