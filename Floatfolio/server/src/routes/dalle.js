const { OpenAI } = require("openai");
module.exports = async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_SECRET,
    });
    const userMessage = req.body.message;
    const userContext = req.body.status;
    console.log("Context:"+ userContext,"Message:"+ userMessage);

    try {
        const image = await openai.images.generate({ prompt: userMessage, size: "256x256" });
         console.log(image)

      res.json({ image});
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status);
      console.error(error.message);
      console.error(error.code);
      console.error(error.type);
      res.status(error.status).send(error.message, error.code, error.type);
    } else {
      console.log(error);
      res.status(500).send(error.toString());
    }
  }
};
