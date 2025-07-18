const express = require("express");

const router = express.Router();
const isLogIn = require("../middlewares/isLogIn");
const upload = require("../config/multerconfing");

const {
  post,
  profile,
  uploadProfilePic,
} = require("../controllers/userController");
router.get("/profile", isLogIn, profile);
router.get("/post", post);
router.post("/upload", isLogIn, upload.single("images"), uploadProfilePic);

module.exports = router;
