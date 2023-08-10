module.exports = async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        
        const user = await Users.findOne({email : email});
        if(user){
            
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
               
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
};