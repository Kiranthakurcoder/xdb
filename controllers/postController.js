const UserModel = require("../models/user");
const postModel = require("../models/post");

// 1️⃣ Create Post
const createPost = async (req, res) => {
  const { content } = req.body;
  const user = await UserModel.findOne({ email: req.user.email });
  const post = await postModel.create({
    user: user._id,
    content,
    image: req.file ? req.file.filename : null,
  });
  user.posts.push(post._id);
  await user.save();
  res.json({ success: true, message: "Post created with image" });
};

// 2️⃣ Comment on Post
const commentPost = async (req, res) => {
  const post = await postModel.findById(req.params.postid);
  if (!post)
    return res.status(404).json({ success: false, message: "Post not found" });
  post.comments.push({
    user: req.user.userid,
    text: req.body.text,
  });
  await post.save();
  res.json({ success: true, message: "Comment added" });
};

// 3️⃣ Like/Unlike Post
const likePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post)
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    if (post.likes.includes(req.user.userid)) {
      post.likes = post.likes.filter(
        (uid) => uid.toString() !== req.user.userid
      );
    } else {
      post.likes.push(req.user.userid);
    }
    await post.save();
    res.json({ success: true, likes: post.likes.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 4️⃣ Delete Post
const deletePost = async (req, res) => {
  await postModel.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Post deleted" });
};

// 5️⃣ Update Post
const updatePost = async (req, res) => {
  await postModel.findByIdAndUpdate(req.params.id, {
    content: req.body.content,
  });
  res.json({ success: true, message: "Post updated" });
};

module.exports = {
  createPost,
  commentPost,
  likePost,
  deletePost,
  updatePost,
};
