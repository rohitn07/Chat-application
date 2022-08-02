// const express = require("express");
// const {chats} = require("./data/data");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const colors = require("colors");  // to give colors in terminal
// const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");




const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept JSON data as we are taking data from frontend (9)


// app.get("/api/chat", (req,res) => {
//     res.send(chats);
// });

// :id will be replaced by id when searching 
// ex: http://localhost:3000/api/chat/617a077e18c2d468bc7c4dd4

// app.get("/api/chat/:id", (req,res) => {
    
//     // finding the singlechat by comparing ids 
//     const singleChat = chats.find( c=>c._id === req.params.id );
//     res.send( singleChat );

// })

app.use("/api/user", userRoutes ) // logic for routes related to usesr will be stored here
app.use("/api/chat", chatRoutes )
app.use("/api/message", messageRoutes );

// Error handlers, if in case we go to undefined route
// refer middleware/errmiddleware.js

app.use(notFound); // If it doesnt match any of the above routess, it goes here
app.use(errorHandler);  // Even after that if there is error, it goes here


const PORT = process.env.PORT ;

app.listen( PORT , function(){
    console.log("Server started on port "+PORT);
});