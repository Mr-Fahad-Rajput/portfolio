const handleImageUpload = async (formData, endPoint) => {
    try {
      const response = await fetch("http://207.180.234.135:5888/"+ endPoint, {
        method: "POST",
        headers: {
            "X-API-Key": import.meta.env.VITE_SOME_KEY,
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
  