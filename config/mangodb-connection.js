// const mongoose = require('mongoose');
// const config = require("config")

// mongoose
// .connect(`${config.get("MONGODB_URI")}`)
// .then(()=>{console.log("connected")})
// .catch((err)=> console.log("oops somthing eorry"))

// module.exports =mongoose.Connection;


const mongoose = require('mongoose');
const config = require("config")

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log("connected")})
.catch((err)=> console.log("oops somthing eorry"))

module.exports =mongoose.Connection;