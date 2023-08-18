const handleSubmit = async (
  event,
  user,
  type,
  setErrStatus,
  setResponseStatus,
  setIsLoading,
  navigate
) => {
  event.preventDefault();
  let delay = 3000;
  let endPoint, dataBody, successMsg;
  setIsLoading(true);
  if (type === "SignIn") {
    const { email, password } = user;
    dataBody = JSON.stringify({
      email,
      password,
    });
    endPoint = "login";
    successMsg = "Login Succesful! Welcome aboard!";
  } else if (type === "SignUp") {
    const { username, email, password } = user;
    dataBody = JSON.stringify({
      username,
      email,
      password,
    });
    endPoint = "register";
    successMsg = "Account Successfully Created! Welcome aboard!";
  } else if (type === "msg") {
    const { name, email, subject, message } = user;
    dataBody = JSON.stringify({
      name,
      email,
      subject,
      message,
    });
    endPoint = "message";
    successMsg =
      "Message Sent! Thanks for reaching out! We'll be in Touch Soon.";
  }
  try {
    const res = await fetch("http://localhost:5000/" + endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataBody,
    });
    console.log(res.status);
    if (res.status === 400 || !res) {
      setErrStatus(true);
      let errorMessage = await res.text();
      console.error("Error:", errorMessage);
      if (errorMessage.includes("duplicate")) {
        errorMessage = "The Entered Details are Already Registered!";
      }
      errorMessage = errorMessage.replace(/\b\w+:|Path|(.,)\s*/g, "");
      errorMessage = errorMessage.replace(/validation/g, "NOT SENT:");
      errorMessage = errorMessage.replace(
        /.*(?:mongodb\.net|ENOTFOUND).*$/g,
        "Server Error: Database Server"
      );
      delay = 5000;
      setResponseStatus({
        status: true,
        text: errorMessage,
      });
      setIsLoading(false);
    } else {
      setErrStatus(false);
      setResponseStatus({
        status: true,
        text: successMsg,
      });
      setIsLoading(false);
      delay = 2000;
      setTimeout(() => {
        if (type != "msg") {
          navigate("/", { replace: true });
        }
      }, delay + 500);
    }
  } catch (error) {
    setErrStatus(true);
    console.log(error);
    if (error.toString().includes("Failed to fetch")) {
      delay = 4000;
      setIsLoading(false);
      setResponseStatus({
        status: true,
        text: "Can't Connect To the Server! Check Your Internet Connection",
      });
    }
  } finally {
    setTimeout(() => {
      setErrStatus(false);
      setResponseStatus({
        status: false,
        text: "",
      });
    }, delay);
  }
};

export default handleSubmit;
