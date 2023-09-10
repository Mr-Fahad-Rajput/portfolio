const { Configuration, OpenAIApi } = require("openai");
module.exports = async (req, res) => {
  try {
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
    console.log(response);
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
