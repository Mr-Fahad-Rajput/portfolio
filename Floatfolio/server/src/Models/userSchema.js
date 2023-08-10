const mongoose = require('mongoose');
const bcryptjs =require('bcryptjs');
const jwt = require ('jsonwebtoken');
require('dotenv').config({ path: '../database/config.env' });

const userSchema = new mongoose.Schema({
username : {
type : String, 
required : true,
unique : true
},
email : {
type : String, 
required : true,
unique : true
},
password :{
type : String,
required : true
},
tokens : [
    {
        token : {
            type : String,
            required : true
        }
    }
]

});

userSchema.pre('save', async (next) => {
if (this.isModified('password')){

    this.password = bcryptjs.hashSync(this.password, 10);
}
next();

});

userSchema.methods.generateToken = async () => {
try {
    let generatedToken = jwt.sign({_id : this.id, VhQ5koGsor4b6xoWcm3ZFbhP8jT2Rbal});
    this.tokens =this.tokens.concat({token : generatedToken});
    await this.save();
    return generatedToken;
} catch (err) {
console.log(err.message);
}
}
//const Users = mongoose.models.userSchema || mongoose.model("Users",userSchema);
//const Users = mongoose.model.Users || new mongoose.model("USER",userSchema);
 module.exports = mongoose.model.userSchema || mongoose.model('Users', userSchema);
//module.exports = Users;