const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    if (!file.mimetype.includes("video")) {
      return cb(new Error("Only video files are allowed"));
    }
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ dest: "uploads/", storage });

module.exports = upload;
