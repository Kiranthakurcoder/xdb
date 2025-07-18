const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    age: Number,
    password: String,
    username: String,
    email: String,
    name: String,
    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    profilepic: {
        type : String,
        default : "defultlogo.jpg"
    }

});

module.exports = mongoose.model("user", userSchema);