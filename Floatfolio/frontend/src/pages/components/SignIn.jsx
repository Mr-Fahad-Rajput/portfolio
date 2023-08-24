import { useLocation, useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";
import { useEffect, useState } from "react";
import AlertBox from "./AlertBox";
import sent from "../../assets/login.svg";
import notSent from "../../assets/notsent.svg";

function SignIn() {
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
  //BackEnd Integration
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const handleSubmitModule = await import("../apiCalls/handleSubmit.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(
        event,
        user,
        "SignIn",
        setErrStatus,
        setResponseStatus,
        setIsLoading,
        navigate
      );
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    }
  };

  // Front End Navigation
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
        <div className="relative">
          {/* Start Content */}
          <div className="text-center m-auto">
            <div className="relative w-full max-w-sm m-auto p-7 div whitespace-nowrap z-20">
              <h5 className="mb-2 text-xl dark:text-mainBg font-semibold underline cursor-default w-[98%]">
                Login
              </h5>
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1">
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
                      required
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                    />
                  </div>
                  <AlertBox
                    responseStatus={responseStatus}
                    msgImg={msgImg}
                    className="top-0"
                  />
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
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="w-full">
                      <input
                        className=" rounded w-4 h-4 me-2 border border-inherit cursor-pointer"
                        type="checkbox"
                        value=""
                        id="RememberMe"
                      />
                      <label
                        className=" text-slate-600 dark:text-mainBg cursor-pointer"
                        htmlFor="RememberMe"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <p className="mt-4 mb-0">
                      <a
                        onClick={() =>
                          navigate("/resetpass", {
                            state: { fromSpecificPage: true },
                          })
                        }
                        className="text-balBrand cursor-pointer hover:underline dark:hover:text-mainBg dark:text-secondaryBg"
                      >
                        {" "}
                        Forgot password ?{" "}
                      </a>
                    </p>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      name="login"
                      className="p-4 m-2 btn whitespace-nowrap mx-auto"
                      disabled={isLoading}
                      aria-label="Login Button"
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
                          Logging In...
                        </div>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-slate-600 dark:text-mainBg me-2 cursor-default">
                      Dont have an account ?
                    </span>{" "}
                    <a
                      onClick={() =>
                        navigate("/signup", {
                          state: { fromSpecificPage: true },
                        })
                      }
                      className=" dark:text-secondaryBg fw-bold cursor-pointer hover:underline dark:hover:text-mainBg"
                    >
                      Sign Up
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
          {/* End Content */}
        </div>
      </section>
    </>
  );
}
export default SignIn;
