const { OpenAI } = require("openai");
module.exports = async (req, res) => {
  try {
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_SECRET
      });
      const userMessage = req.body.message;
      console.log(userMessage);

  try {
    
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": userMessage}],
        stream: true,
      });
      

    const botResponse = chatCompletion.choices[0].message;
    console.log(botResponse)

    res.json({ botResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage.toString());
  }
};
