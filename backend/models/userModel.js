// name 
// email 
// password
// picture 
// isadmin


const mongoose = require("mongoose");

const userSchema = mongoose.Schema(

    {
        name: {type: String, required: true },
        email: {type: String, required: true },
        password: {type: String, required: true },
        pic: {
            type: String,
            default: "https://i.pinimg.com/564x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"
        }
    },
    
    { timestamps : true }
);



const User = mongoose.model("User", userSchema );
mongoose.exports = User 