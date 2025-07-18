const jwt = require("jsonwebtoken");

const isLogIn = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ success: false, message: "Not logged in" });

  try {
    const data = jwt.verify(token, process.env.JWT_KEY);

    req.user = data;
    next();
  } catch (err) {
    return res.json({ success: false, message: "Invalid token" });
  }
};

module.exports = isLogIn;
