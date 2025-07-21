const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const { genratetoken } = require("../utils/TokenGenrator");

// 🔴 Register Controller
module.exports.register = async (req, res) => {
  const { name, username, email, password, age } = req.body;
  const exist = await UserModel.findOne({ email });
  if (exist)
    return res.json({ success: false, message: "Already registered" });

  const hash = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    name,
    username,
    email,
    age,
    password: hash,
  });

  const token = genratetoken(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,      // ✅ Important for deployment (HTTPS)
    sameSite: "none",  // ✅ For cross-origin (React <-> Express)
  });

  res.json({ success: true, message: "Registered successfully" });
};

// 🔴 Login Controller
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user)
    return res.json({ success: false, message: "Email not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.json({ success: false, message: "Incorrect password" });

  const token = genratetoken(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.json({ success: true, message: "Login successful" });
};

// 🔴 Logout Controller
module.exports.logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.json({ success: true, message: "Logged out" });
};
