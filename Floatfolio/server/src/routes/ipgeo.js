const axios = require("axios");
module.exports = async (req, res) => {
  try {
    const ip = req.body.ip;
    const period = req.body.period;
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const geoData = response.data;
    console.log("Geolocation geoData:", geoData);
    const location = geoData.loc;
    var type, endURL;
    if (period == "current") {
      type = { q: location };
      endURL = "https://weatherapi-com.p.rapidapi.com/current.json";
    } else {
      type = { q: location, days: "3" };
      endURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
    }
    const options = {
      method: "GET",
      url: endURL,
      params: type,
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
    }
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
