const express = require("express");
const router = express.Router();
const upload = require("../config/multerconfing");

const {
  createPost,
  commentPost,
  likePost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const isLogIn = require("../middlewares/isLogIn");

router.post("/post", isLogIn, upload.single("image"), createPost);
router.post("/comment/:postid", isLogIn, commentPost);
router.get("/like/:id", isLogIn, likePost);
router.get("/delete/:id", isLogIn, deletePost);
router.post("/update/:id", isLogIn, updatePost);

module.exports = router;
