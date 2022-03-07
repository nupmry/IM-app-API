const { chats } = require('./data/data');
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000
dotenv.config({ path: "./../.env" });

app.get("/", (req, res) => {
    res.send("API is working");
})

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})

app.listen(PORT, console.log(`Server running on port ${PORT}`));