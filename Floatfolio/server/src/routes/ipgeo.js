const axios = require('axios');
module.exports = async (req, res) => {
  try {
    const ip = req.body.ip;
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const data = response.data;
    console.log("Geolocation Data:", data);
    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
