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
        { type: "SAFE_SEARCH_DETECTION" },
        { type: "IMAGE_PROPERTIES" },
        { type: "FACE_DETECTION" },
        { type: "LOGO_DETECTION" },
        { type: "LANDMARK_DETECTION" },
        { type: "WEB_DETECTION" },
        { type: "DOCUMENT_TEXT_DETECTION" },
        { type: "TEXT_DETECTION_OPTICAL_CHARACTER_RECOGNITION" },
        { type: "LOCALIZED_OBJECT_ANNOTATION" },
        { type: "CROP_HINTS" },
        { type: "OBJECT_LOCALIZATION" },
        { type: "PRODUCT_SEARCH" },
        { type: "TRANSLATE_TEXT", targetLanguage: "en" },
        { type: "PANEL_DETECTION" },
        { type: "OBJECT_LOCALIZATION" },
      ],
    });
    const labels = result.labelAnnotations;
    const texts = result.textAnnotations;
    const safeSearch = result.safeSearchAnnotation;
    const imageProperties = result.imagePropertiesAnnotation;
    const faceAnnotations = result.faceAnnotations;
    const logoAnnotations = result.logoAnnotations;
    const landmarkAnnotations = result.landmarkAnnotations;
    const webAnnotations = result.webDetection;
    const documentTextAnnotations = result.fullTextAnnotation;
    const localizedObjectAnnotations = result.localizedObjectAnnotations;
    const cropHints = result.cropHintsAnnotation;
    const objectLocalizations = result.localizedObjectAnnotations; // Assuming object localization results are similar to localizedObjectAnnotations
    const productSearchResults = result.productSearchResults;
    const translatedText = result.textAnnotations; // Assuming you want to store translated text
    const panelAnnotations = result.panelAnnotations;
    const textDetectionOCR = result.textAnnotations;
    console.log(labels, texts);
    // Respond with the annotations
    res.status(200).send({ labels, texts,safeSearch,imageProperties,faceAnnotations, logoAnnotations, landmarkAnnotations, webAnnotations, documentTextAnnotations, localizedObjectAnnotations, objectLocalizations, cropHints, translatedText, productSearchResults, panelAnnotations, textDetectionOCR });
    // res.json({ labels, texts });
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
