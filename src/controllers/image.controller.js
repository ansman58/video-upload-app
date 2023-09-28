const imageController = async (req, res) => {
  try {
    const { video } = req.files;

    console.log(video);

    res

    // res.status(200).json({ message: "Video uploaded successfully" }, video);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { imageController };
