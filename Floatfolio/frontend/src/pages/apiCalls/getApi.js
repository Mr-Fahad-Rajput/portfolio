const handleAPI = async ( endPoint, reqType) => {
    try {
      let res = await fetch(import.meta.env.VITE_SERVER_URL + endPoint, {
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