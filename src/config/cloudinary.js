require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;

// {
//   fieldname: 'file',
//   originalname: '2023-08-05 20-24-37.mkv',
//   encoding: '7bit',
//   mimetype: 'video/x-matroska',
//   destination: 'images',
//   filename: '1696001555243.mkv',
//   path: 'images\\1696001555243.mkv',
//   size: 7789955
// }
