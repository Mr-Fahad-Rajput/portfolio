const axios = require("axios");
module.exports = async (req, res) => {
  try {
    const ip = req.body.ip;
    const response = await axios.get(`https://ipapi.co/${ip}/latlong/`);
    const geoData = response.data;
    console.log("Geolocation geoData:", geoData);
    const location = geoData;
    console.log(location);
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: location, days: "3" },
      headers: {
        "X-RapidAPI-Key": process.env.XGEO_KEY,
        "X-RapidAPI-Host": process.env.XGEO_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      res.status(200).send(response.data);
    } catch (error) {
      console.error(error);
      const errorMessage = error.message;
      res.status(500).send(errorMessage);
    }
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
