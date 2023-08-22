const handleAPI = async (dataBody, endPoint, reqType) => {
  try {
    console.log(JSON.stringify(dataBody));
    const res = await fetch("http://localhost:5000/" + endPoint, {
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
