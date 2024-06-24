const handleAPI = async ( endPoint, reqType) => {
    try {
      let res = await fetch("http://209.38.190.250:5666/" + endPoint, {
        method: reqType,
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_SOME_KEY,
        },
        credentials: "include",
      });
      return res;
    } catch (error) {
      return error;
    }
  };
  export default handleAPI;