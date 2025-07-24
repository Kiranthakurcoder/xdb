// require("dotenv").config();

// // ------------------- Imports -------------------
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const path = require("path");
// const upload = require("./config/multerconfing");
// const db = require("./config/mangodb-connection");

// // ------------------- Routes -------------------
// const authR = require("./routes/authRoutes");
// const postR = require("./routes/postRoutes");
// const userR = require("./routes/userRoutes");

// // ------------------- App Init -------------------
// const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// // ------------------- Routes Apply -------------------
// app.use("/auth", authR);
// app.use("/create", postR);
// app.use("/admin", userR);

// // ------------------- Start Server -------------------
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./config/multerconfing");
require("./config/mangodb-connection");

// ------------------- App Init -------------------
const app = express();

// ------------------- Middlewares -------------------
app.use(
  cors({
    origin: [
      // "http://localhost:5173",
      "http://localhost:5174",
      "https://illustrious-florentine-404b6f.netlify.app/",
      "https://xweb-78sdk5pb0-kiranthakurcoders-projects.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// ------------------- Routes -------------------
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/auth", authRoutes);
app.use("/create", postRoutes);
app.use("/admin", userRoutes);

// ------------------- Start Server -------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
