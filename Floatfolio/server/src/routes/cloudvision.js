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
    const feature = textData.feature;
    const [result] = await client.annotateImage({
      image: {
        content: imageContent,
      },
      features: [{ type: feature }],
    });
    var responseObject;
    if (feature == "LABEL_DETECTION") responseObject = result.labelAnnotations;
    else if (feature == "TEXT_DETECTION")
      responseObject = result.textAnnotations;
    else if (feature == "DOCUMENT_TEXT_DETECTION")
      responseObject = result.fullTextAnnotation;
    else if (feature == "SAFE_SEARCH_DETECTION")
      responseObject = result.safeSearchAnnotation;
    else if (feature == "IMAGE_PROPERTIES")
      responseObject = result.imagePropertiesAnnotation;
    else if (feature == "LOGO_DETECTION")
      responseObject = result.logoAnnotations;
    else if (feature == "LANDMARK_DETECTION")
      responseObject = result.landmarkAnnotations;
    else if (feature == "WEB_DETECTION") responseObject = result.webDetection;

    res.status(200).send({ responseObject });
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
