require("dotenv").config();
const express = require("express");
const { videoController } = require("./src/controllers/video.controller");
const multer = require("multer");

const upload = multer({ dest: "/upload" });

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("file"), videoController);

app.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});
