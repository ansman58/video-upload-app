// const cloudinary = require("cloudinary");
const cloudinary = require("./src/config/cloudinary");

const cloud_shit = async (filename) => {
  try {
    const upload = await cloudinary.v2.uploader.upload(filename, {
      resource_type: "video",
      
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = cloud_shit;
