// import cloudinary from "cloudinary";

// cloudinary.config({
//   cloud_name: "djiskult9",
//   api_key: "949754124699739",
//   api_secret: "KXF477wqH1Jb_xwAd8qq0SnrlAs",
// });

// export default cloudinary;

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djiskult9",
  api_key: "949754124699739",
  api_secret: "KXF477wqH1Jb_xwAd8qq0SnrlAs",
});

module.exports = cloudinary;

