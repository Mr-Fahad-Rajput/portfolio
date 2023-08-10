
const Users = require('../Models/userSchema');
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken = jwt.verify(token, VhQ5koGsor4b6xoWcm3ZFbhP8jT2Rbal);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if(!rootUser){
                res.status(401).send("User Not Found")
            }else{
                res.status(200).send("Authorized User")
            }
        }

        next()
    } catch (error) {
        res.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate;