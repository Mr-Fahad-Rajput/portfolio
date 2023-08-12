const mongoose = require('mongoose');
const bcryptjs =require('bcryptjs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv');
dotenv.config();


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

userSchema.pre('save', async function(next) {
if (this.isModified('password')){
    const salt = await bcryptjs.genSalt()
    this.password = await bcryptjs.hashSync(this.password, salt);
}
next();

});

userSchema.methods.generateToken = async function() {
try {
    payload = process.env.KEY_JWT;
    let generatedToken = jwt.sign({_id : this.id, payload});
    this.tokens =this.tokens.concat({token : generatedToken});
    console.log("Token"+this.tokens);
    await this.save();
    return generatedToken;
} catch (err) {
console.log(err.message);
}
};

module.exports = mongoose.model.userSchema || mongoose.model('Users', userSchema);
