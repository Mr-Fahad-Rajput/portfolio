const handleImageUpload = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/cloudvision", {
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
        throw new Error('Error uploading image.');
      }
    } catch (error) {
      return error;
    }
  };
  
  export default handleImageUpload;
  