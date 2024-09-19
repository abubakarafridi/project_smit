import express from 'express'

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/api/items", (req,res) => {
    res.status(200).json({message : "Get request - fetching all items"})
})

app.post("/api/items", (req,res) => {
    const newItem = req.body;
    res.status(201).json({message: 'Post request - Adding new Item', data: newItem})
})

app.put("/api/items/:id", (req,res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.status(200).json({message: `Put request - updating Item ${itemId}`, data: updatedItem})
})

app.delete("/api/items/:id", (req,res) => {
    const itemId = req.params.id;
    res.status(200).json({message: `Delete request - deleting Item ${itemId}`})
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
})