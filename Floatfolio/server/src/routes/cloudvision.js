const {Storage} = require('@google-cloud/storage');
module.exports = async (req, res) => {
  try {
    const projectId = "airy-galaxy-396916";
    async function authenticateImplicitWithAdc() {
        // This snippet demonstrates how to list buckets.
        // NOTE: Replace the client created below with the client required for your application.
        // Note that the credentials are not specified when constructing the client.
        // The client library finds your credentials using ADC.
        const storage = new Storage({
          projectId,
        });
        const [buckets] = await storage.getBuckets();
        console.log('Buckets:');
      
        for (const bucket of buckets) {
          console.log(`- ${bucket.name}`);
        }
      
        console.log('Listed all storage buckets.');
      }
      
      authenticateImplicitWithAdc();
  } catch (error) {
    console.error("Error fetching geolocation geoData:", error);
    const errorMessage = error.message;
    res.status(500).send(errorMessage);
  }
};
