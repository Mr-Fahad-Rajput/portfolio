const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const database = "mongodb+srv://mr_fahad_rajput:whETr8kX@cluster0.y20to.mongodb.net/test";

mongoose.connect(database,{
    useNewUrlParser :true,
    useUnifiedTopology :true
}).then( () => {
console.log("Connection was very very Successful ;)");

}).catch( (err) => {

console.log(err.message);
});