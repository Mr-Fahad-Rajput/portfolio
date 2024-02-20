const handleAPI = async (dataBody, endPoint, reqType) => {
  try {
    let res = await fetch("http://207.180.234.135:5888/" + endPoint, {
      method: reqType,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": import.meta.env.VITE_SOME_KEY,
      },
      body: JSON.stringify(dataBody),
      credentials: "include",
    });
    return res;
  } catch (error) {
    return error;
  }
};
export default handleAPI;
