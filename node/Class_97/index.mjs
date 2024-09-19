import {createServer} from "node:http"

const server = createServer((req, res) => {
    const {method ,url} = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`)

    res.setHeader('Content-Type', 'application/json')

    // GET Request
    if (method === "GET" && parsedUrl.pathname === '/api/items') {
        res.statusCode = 200;
        res.end(JSON.stringify({message: "GET request - Fetching all items"}))
    } 
    // POST
    else if (method === "POST" && parsedUrl.pathname === '/api/items') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const newItem = JSON.parse(body);
            res.statusCode = 201;
            res.end(JSON.stringify({ message : 'Post request, Adding new Itme', data : newItem}))
        })
    } 
    // PUT Request
    else if (method === "PUT" && parsedUrl.pathname.startsWith('/api/items/')) {
        let body = '';
        const itemId = parsedUrl.pathname.split('/').pop();
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on("end", () => {
            const updatedItem = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({message: `PUT Reguest - Updated Item ${itemId}`, data: updatedItem}));
        })
    }
    // DELETE Request
    else if (method === "DELETE" && parsedUrl.pathname.startsWith('/api/items/')) {
        const itemId = parsedUrl.pathname.split('/').pop();
        res.statusCode = 200;
        res.end(JSON.stringify({message : `DELETE request - delete item ${itemId}`}))
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is listening on : http://localhost:${PORT}`)
}) 