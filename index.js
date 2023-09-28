const express = require("express");
const { imageController } = require("./src/controllers/image.controller");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {

    console.log(req.files);
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ dest: "uploads/", storage });

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("files"), imageController);

app.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});
