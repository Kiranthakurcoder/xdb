const jwt = require("jsonwebtoken");

const genratetoken = (user)=>{
    return jwt.sign({ email:user.email, userid: user._id }, process.env.JWT_KEY);
}

module.exports.genratetoken = genratetoken