// const multer = require("multer")
// const path = require("path")
// const crypto = require("crypto")



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public')
//     },
//     filename: function (req, file, cb) {
//      crypto.randomBytes(12,(err,bytes)=>{
//        const fn = bytes.toString("hex") + path.extname(file.originalname)
//        cb(null, fn)
//      })
//     }
//   })
  
//   const upload = multer({ storage: storage })

//   module.exports = upload;

//   const multer = require("multer");
// const path = require("path");
// const crypto = require("crypto");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public');
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, (err, bytes) => {
//       const fn = bytes.toString("hex") + path.extname(file.originalname);
//       cb(null, fn); 
//     });
//   }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public")
      
      
//     },
//     filename: function (req, file, cb) {
//        crypto.randomBytes(10,(err,bytes)=>{
//         const fn = bytes.toString("hex") + path.extname(file.originalname)
  
        
      
//         cb(null,fn)
      
//       } )
      
//     }
//   })
  
//   const upload = multer({ storage: storage });

// module.exports = upload;




// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');  // ✅ uploads folder ke andar save hoga
  },  
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      if (err) return cb(err);
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });  
  }  
});  

const upload = multer({ storage: storage });

module.exports = upload;



// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "./cloudinary.js" // 👈 ye wahi file hai jisme tu cloud_name etc. likha tha

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "profile_pics", // 👈 images Cloudinary ke is folder me jayengi
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// const upload = multer({ storage });

// export default upload;


// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("./cloudinary");

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "profile_pics",
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;




