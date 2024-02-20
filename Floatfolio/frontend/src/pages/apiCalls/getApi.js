const handleAPI = async ( endPoint, reqType) => {
    try {
      let res = await fetch("http://127.0.0.1:5666/" + endPoint, {
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