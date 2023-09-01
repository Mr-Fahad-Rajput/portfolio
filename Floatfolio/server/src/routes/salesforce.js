const jsforce =require('jsforce')
module.exports = async (req, res) => {
  try {
    const connectionForce = new jsforce.connection({
        loginUrl: process.env.SF_LOGIN_URL
    })
    connectionForce.login(SF_USER,SF_PASS+SF_TOKEN, (err, userInfo)=>{
        if(err){
            console.log(err.message) || console.log(err)
        }else{
            console.log(userInfo)
        }
    })
  } catch (error) {
   
  }
};
