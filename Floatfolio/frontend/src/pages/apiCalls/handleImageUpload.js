const handleImageUpload = async (formData, endPoint) => {
    try {
      const response = await fetch("https://server.faadii.tech:8080/"+ endPoint, {
        method: "POST",
        headers: {
            "X-API-Key": process.env.VITE_SOME_KEY,
          },
        body: formData,
        credentials: "include",
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return response;
      }
    } catch (error) {
      return error;
    }
  };
  
  export default handleImageUpload;
  