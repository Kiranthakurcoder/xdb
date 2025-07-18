require("dotenv").config();

// ------------------- Imports -------------------
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./config/multerconfing");
const db = require("./config/mangodb-connection");

// ------------------- Routes -------------------
const authR = require("./routes/authRoutes");
const postR = require("./routes/postRoutes");
const userR = require("./routes/userRoutes");

// ------------------- App Init -------------------
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// ------------------- Routes Apply -------------------
app.use("/auth", authR);
app.use("/create", postR);
app.use("/admin", userR);

// ------------------- Start Server -------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
