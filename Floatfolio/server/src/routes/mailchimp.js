const request = require('request')
module.exports = async (req, res) => {
    try {
      const email = req.body.email
      const reqStatus =req.body.status;
      console.log(reqStatus)
      const mcData = {
        members: [{
            email_address: email,
            status: reqStatus
        }]
      }
      const dataPost = JSON.stringify(mcData);
      const options = {
        url: process.env.MC_URL,
        method: 'POST',
        headers: {
            Authorization: process.env.MC_API_KEY
        },  
        body: dataPost
      }
      if(email){
        var setUrl = "";
        request(options,(err,response, body)=>{
            if(err){
                setUrl = `${process.env.SERVER_URL}/mailchimp#cancel`,
                res.status(400).json({error:err}).send({message:"Error Occured", urlRes: setUrl})
            }else{
                setUrl=`${process.env.SERVER_URL}/mailchimp#success`,
                res.status(200).send({ message: "Successful", urlRes: setUrl });
            }
        })
      }else{
        res.status(404).send("Email Not Found")
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.message;
      res.status(500).send(errorMessage);
    }
  };
  