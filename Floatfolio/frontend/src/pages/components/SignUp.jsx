import { useLocation, useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";
import { useEffect, useState } from "react";
import sent from "../../assets/sent.svg";
import notSent from "../../assets/notsent.svg";
import AlertBox from "./AlertBox";

function SignUp() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });

  const [msgImg, setMsgImg] = useState(sent);
  const [errStatus, setErrStatus] = useState(false);

  useEffect(() => {
    setMsgImg(errStatus ? notSent : sent);
  }, [errStatus]);
  //Backend Integration
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    let delay = 3000;
    setIsLoading(true);
    const { username, email, password } = user;
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        setErrStatus(true);
        let errorMessage = await res.text();
        console.error("Error:", errorMessage);
        errorMessage = errorMessage.replace(
          /.*(?:mongodb\.net|ENOTFOUND).*$/g,
          "Server Error: MongoDB Server Down"
        );
        if (errorMessage.includes("duplicate")) {
          errorMessage = "The Entered Details are Already Registered!";
        }
        delay = 5000;
        setResponseStatus({
          status: true,
          text: errorMessage,
        });
      } else {
        setErrStatus(false);
        setResponseStatus({
          status: true,
          text: "Account Successfully Created! Welcome aboard!",
        });
        delay = 2000;
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseStatus({
          status: false,
          text: "",
        });
      }, delay);
    }
  };
  // TODO 0Auth google And Facebook
  //FrontEnd Logic
  const { fromSpecificPage } = state || {};
  function goBack() {
    if (fromSpecificPage) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }

  return (
    <>
      <section>
        <div
          className="absolute inset-0 bg-black opacity-50 z-10"
          onClick={goBack}
        ></div>
        <div className=" relative">
          {/* Start Content */}
          <div className="text-center m-auto overflow-hidden">
            <div className="relative w-full max-w-sm m-auto p-5 div whitespace-nowrap z-20">
              <h5 className="mb-2 text-xl dark:text-mainBg font-semibold underline cursor-default w-[98%]">
                SignUp
              </h5>
              <AlertBox
                responseStatus={responseStatus}
                msgImg={msgImg}
                className="top-0"
              />
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label
                      className="dark:text-mainBg mr-5"
                      htmlFor="RegisterName"
                    >
                      {" "}
                      Name:
                    </label>
                    <input
                      id="RegisterName"
                      type="text"
                      className=" inp"
                      placeholder="Full Name"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="dark:text-mainBg mr-4"
                      htmlFor="RegisterEmail"
                    >
                      {" "}
                      Email:{" "}
                    </label>
                    <input
                      id="RegisterEmail"
                      type="email"
                      className="inp"
                      placeholder="name@example.com"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="dark:text-mainBg"
                      htmlFor="RegisterPassword"
                    >
                      Password:
                    </label>
                    <input
                      id="RegisterPassword"
                      type="password"
                      className=" inp"
                      placeholder="Something Strong"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="w-full">
                      <input
                        className=" rounded w-4 h-4 me-2 border border-inherit cursor-pointer"
                        type="checkbox"
                        value=""
                        id="AcceptT&C"
                      />
                      <label
                        className=" text-slate-600 dark:text-mainBg"
                        htmlFor="AcceptT&C"
                      >
                        {" "}
                        I Accept{" "}
                        <a
                          href=""
                          className="text-balBrand dark:text-secondaryBg  hover:underline"
                        >
                          {" "}
                          Terms And Condition{" "}
                        </a>
                        {/* TODO Setup Sign Up Requirments like Password LEngths, AGree to terms etc */}
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 text-end">
                    <button
                      type="submit"
                      name="register"
                      className="p-4 m-2 btn whitespace-nowrap mx-auto"
                      disabled={isLoading}
                      aria-label="Register Button"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2">
                            <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-100 "
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#FEFAE6"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="#471AA0"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </div>
                          Registering...
                        </div>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-slate-600 dark:text-mainBg me-2 cursor-default">
                      {" "}
                      Already have an account ?{" "}
                    </span>{" "}
                    <a
                      onClick={() =>
                        navigate("/signin", {
                          state: { fromSpecificPage: true },
                        })
                      }
                      className=" dark:text-secondaryBg fw-bold cursor-pointer hover:underline"
                    >
                      {" "}
                      Sign in
                    </a>
                  </div>
                </div>
              </form>
              <div
                className="mx-[48%] mt-3 w-5 h-5  hover:scale-125 text-dBrand dark:bg-mainBg rounded-3xl cursor-pointer"
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                <img src={close} alt="Home Button" />
              </div>
            </div>
          </div>

          {/* TODO add a loading Circle until the server responds  */}
          {/* End Content */}
        </div>
      </section>
    </>
  );
}
export default SignUp;
