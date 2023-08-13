// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();
// const database = process.env.MONGO_URI;

// mongoose.connect(database,{
//     useNewUrlParser :true,
//     useUnifiedTopology :true
// }).then( () => {
// console.log("Connection was very very Successful ;)");

// }).catch( (err) => {

// console.log(err.message);
// }); 

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const database = process.env.MONGO_URI;

// Function to establish the MongoDB connection
const connectWithRetry = () => {
  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection was very very Successful ;)");
    })
    .catch((err) => {
      console.log('Connection error:', err.message);
      console.log("Reconecting...")
      setTimeout(connectWithRetry, 10000); 
    });
};

connectWithRetry();
