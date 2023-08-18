const dotenv = require("dotenv");
dotenv.config();
function apiKeyMiddleware(req, res, next) {
    const providedApiKey = req.headers['x-api-key'];
  
    if (providedApiKey !== process.env.REQ_KEY) {
      return res.status(403).json({ message: 'Request UnAuthorized' });
    }
  
    next();
  }

  module.exports = apiKeyMiddleware;