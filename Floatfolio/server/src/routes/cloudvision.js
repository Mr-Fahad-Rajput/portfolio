process.env.GOOGLE_APPLICATION_CREDENTIALS = "./visionservice.json";
const { ImageAnnotatorClient } = require("@google-cloud/vision");
const client = new ImageAnnotatorClient();

module.exports = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No image file uploaded." });
      return;
    }
    const imageContent = req.file.buffer;
    const textData = JSON.parse(req.body.text);
    console.log(textData);
    const [result] = await client.annotateImage({
      image: {
        content: imageContent,
      },
      features: [
        { type: "LABEL_DETECTION" },
        { type: "TEXT_DETECTION" },
        // Add more annotation features as needed
      ],
    });
    const labels = result.labelAnnotations;
    const texts = result.textAnnotations;
    console.log(labels, texts);
    // Respond with the annotations
    res.json({ labels, texts });
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
