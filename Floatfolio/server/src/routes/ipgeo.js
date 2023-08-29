const axios = require('axios');
module.exports = async (req, res) => {
  try {
    const ip = req.body.ip;
    const response = await axios.get(`https://ipinfo.io/${ip}/json`);
    const geoData = response.data;
    console.log("Geolocation geoData:", geoData);
    const location = geoData.loc;
    const city = geoData.city;
    const region = geoData.region;
    const country = geoData.country
    console.log(location,city,country,region)

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: location},
        headers: {
          'X-RapidAPI-Key': process.env.XGEO_KEY,
          'X-RapidAPI-Host': process.env.XGEO_HOST
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
