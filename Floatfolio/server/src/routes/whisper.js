const { OpenAI } = require("openai");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No Audio file uploaded." });
      return;
    }
    fs.writeFileSync(
      __dirname + "/tempData/" + req.file.originalname,
      req.file.buffer
    );
    var audioReadStream = fs.createReadStream(
      __dirname + "/tempData/" + req.file.originalname
    );
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_SECRET,
    });

    try {
      const response = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: audioReadStream,
      });

      console.log(response);
      res.status(200).json({ response });
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
