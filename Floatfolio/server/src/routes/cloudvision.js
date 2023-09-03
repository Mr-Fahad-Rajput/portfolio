// const {Storage} = require('@google-cloud/storage');
process.env.GOOGLE_APPLICATION_CREDENTIALS = './visionservice.json'

module.exports = async (req, res) => {
  try {
    console.log(req.file)
    // console.log(req.file)
    // const projectId = "airy-galaxy-396916";
    // async function authenticateImplicitWithAdc() {
    //     console.log(req.body)
        
    // //     const storage = new Storage({
    // //       projectId,
    // //     });
    // //     const [buckets] = await storage.getBuckets();
    // //     console.log('Buckets:');
      
    // //     for (const bucket of buckets) {
    // //       console.log(`- ${bucket.name}`);
    // //     }
      
    // //     console.log('Listed all storage buckets.');
    // //   }
      
    //   authenticateImplicitWithAdc();
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
