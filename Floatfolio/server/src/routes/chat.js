const { Configuration, OpenAIApi } = require("openai");
module.exports = async (req, res) => {
  try {
    console.log(req.body)
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
    console.log(response);
  } catch (error) {
    console.log(error)
    const errorMessage = error.message;
    res.status(500).send(errorMessage.toString());
  }
};
