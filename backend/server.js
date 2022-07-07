const express = require("express");
const chats = require("./data/data");
// const {chats} = require("./data/data")
const dotenv = require("dotenv");


const app = express();
dotenv.config();


app.get("/", (req,res) => {
    res.send("<h1> da mapla </h1>");
});

app.get("/api/chat", (req,res) => {
    res.send(chats);
});

// :id will be replaced by id when searching 
// ex: http://localhost:3000/api/chat/617a077e18c2d468bc7c4dd4

app.get("/api/chat/:id", (req,res) => {
    
    // finding the singlechat by comparing ids 
    const singleChat = chats.find( c=>c._id === req.params.id );
    res.send( singleChat );

})


const PORT = process.env.PORT ;

app.listen( PORT , function(){
    console.log("Server started on port "+PORT);
});