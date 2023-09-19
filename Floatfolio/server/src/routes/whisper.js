const { OpenAI } = require("openai");
const fs = require("fs");
const { Readable } = require('stream');


module.exports = async (req, res) => {
  try {
    if (!req.file) {
        res.status(400).json({ error: "No Audio file uploaded." });
        return;
      }
      fs.writeFileSync(__dirname +"/../routes/"+req.file.originalname, req.file.buffer);
      var audioReadStream = fs.createReadStream(__dirname +"/../routes/"+req.file.originalname);
    //   const audioReadStream = Readable.from(req.file.buffer);
    //   audioReadStream.path = "audio.mp3";


      console.log("Test:"+JSON.stringify(audioReadStream))
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_SECRET,
    });
    const image = fs.createReadStream("audio.mp3");
    console.log("image:"+JSON.stringify(image))
    // const userMessage = req.body.message;
    // const userContext = req.body.status;
    // console.log("Context:"+ userContext,"Message:"+ userMessage);

    try {
      const response = await openai.audio.transcriptions.create({
        model: "whisper-1",
        file: audioReadStream
        // file: image
      });

      console.log(response);
      res.json({ response });
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
