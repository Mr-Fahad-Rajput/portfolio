const Users = require("../Models/userSchema");

module.exports = async (req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        const created = await createUser.save();
        console.log( created + "was Created");
        res.status(200).send("Registered");

    } catch (error) {
        const errorMessage = error.message
        res.status(400).send(errorMessage)
    }
};