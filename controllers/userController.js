const UserModel = require("../models/user");
const postModel = require("../models/post");

const profile = async (req, res) => {
  const user = await UserModel.findOne({ email: req.user.email }).populate("posts");
  res.json({ success: true, user });
};

const post = async (req, res) => {
  try {
    const posts = await postModel.find().populate("user").sort({ date: -1 });
    res.json({ success: true, posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching posts" });
  }
};

// const uploadProfilePic = async (req, res) => {
//   const user = await UserModel.findOne({ email: req.user.email });
//   user.profilepic = req.file.filename;
//   await user.save();
//   res.json({ success: true, message: "Profile picture updated" });
// };

const uploadProfilePic = async (req, res) => {
  const user = await UserModel.findOne({ email: req.user.email });

  // Cloudinary ke response me URL milta hai:
  user.profilepic = req.file.path;  // 👈 filename ki jagah path likho

  await user.save();
  res.json({ success: true, message: "Profile picture updated" });
};


module.exports = {
  profile,
  post,
  uploadProfilePic,
};
