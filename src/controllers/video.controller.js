const cloudinary = require("../config/cloudinary");

const videoController = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        req.file.path,
        { resource_type: "video" },
        (error, result) => {
          if (error) {
            console.error("promise error", error);
            return reject(error);
          } else {
            console.log("promise resolved", result);
            resolve(result);
            return res.status(200).json({
              message: "Video uploaded successfully",
              data: result,
              video_url: result?.secure_url,
            });
          }
        }
      );
    });
  } catch (error) {
    if (error.http_code === 413) {
      res.status(413).json({
        error: "The video file is too large. Please choose a smaller video",
      });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { videoController };
