import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import oAuthIcon from "./gAuthIcon.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";

import AlertBox from "../../components/AlertBox";

function IdentityGoogle() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [alertImg, setAlertImg] = useState(sent);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });
  const [user, setUser] = useState(null);
  const [dataBody, setDataBody] = useState({
    name: "",
    profileImg: "",
    email: "",
    comment: "",
  });
  useEffect(() => {
    const hashFragment = window.location.hash;

    if (hashFragment === "#success") {
      setAlertImg(sent);
      setResponseStatus({
        status: true,
        text: "Your Comment Has Been Added!",
      });
      setTimeout(() => {
        setResponseStatus({
          status: false,
        });
      }, 3000);
      setDataBody({ ...dataBody, comment: "" });
    } else if (hashFragment === "#cancel") {
      setAlertImg(notSent);
      setResponseStatus({
        status: true,
        text: "Comment was Not Added :(",
      });
      setTimeout(() => {
        setResponseStatus({
          status: false,
        });
      }, 3000);
    }
  }, [hasResponse]);

  function handleCallBack(res) {
    var userData = jwtDecode(res.credential);
    setUser(userData);
  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.VITE_OAUTH_CLIENT_ID,
      callback: handleCallBack,
    });
    google.accounts.id.renderButton(document.getElementById("logIn"), {
      theme: "outline",
      size: "large",
    });
    if (!user) {
      google.accounts.id.prompt();
    }
  }, [user]);

  const handleInput = (event) => {
    const value = event.target.value;

    setDataBody({
      name: user.name,
      profileImg: user.picture,
      email: user.email,
      comment: value,
    });
  };

  // Handle Submit
  const handleAPIcalls = async () => {
    setIsLoading(true);
    setHasResponse(false);
    try {
      const handleSubmitModule = await import("../../apiCalls/handleAPI.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(dataBody, "comment", "POST")
        .then((res) => {
          if (res.ok) {
            res = res.json();
            return res;
          } else {
            throw new Error(" Error" + res);
          }
        })
        .then((data) => {
          const redirectUrl = data.urlRes;
          window.location = redirectUrl;
          setHasResponse(true);
        })
        .catch((error) => {
          setAlertImg(notSent);
          if (error.toString().includes("Failed to fetch")) {
            setResponseStatus({
              status: true,
              text: "Can't Connect To the Server! Check Your Internet Connection",
            });
          } else {
            setResponseStatus({
              status: true,
              text: error.toString(),
            });
            console.log(error);
            const redirectUrl = "http://localhost:5173/oauthgoogle#cancel";
            window.location = redirectUrl;
            setHasResponse(true);
          }
        })
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setResponseStatus({
              status: false,
            });
          }, 3000);
        });
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    }
  };

  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-secondaryBg">
            <a
              href="https://developers.google.com/identity/protocols/oauth2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                src={oAuthIcon}
                alt="Sign in With Google"
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Google Identity Services
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">O</b>Auth 2.0 is a protocol that offers a
              secure and standardized way for applications to gain limited
              access to a user&apos;s accounts on various online platforms, like
              Google, without needing to know the user&apos;s actual
              credentials. This functionality is pivotal for businesses as it
              enables them to seamlessly integrate services from other platforms
              into their own applications. For instance, an e-commerce website
              could utilize OAuth 2.0 to allow customers to log in using their
              Google or social media accounts, simplifying the registration
              process and enhancing user experience.
            </p>
            <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">T</b>his ease of access can lead to higher
              user engagement and customer retention. Furthermore, OAuth 2.0
              facilitates the sharing of specific data between platforms,
              enabling businesses to leverage information from services like
              Google Calendar or Contacts, resulting in more personalized and
              efficient services. By harnessing OAuth 2.0&apos;s capabilities,
              businesses can foster growth through improved user engagement,
              streamlined experiences, and more effective data utilization.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>
          <p className=" mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">U</b>sing my Google OAuth Component is easy!
            Just click the &quot;Sign in with Google&quot; button to log in.
            Once logged in, you&apos;ll see your photo, name, and email. You can
            also add a comment or a Review in the text field, and it will be
            stored along with your details in the database. Your comment will be
            visible on the right-side panel for 48 hours. Don&apos;t worry, your
            email won&apos;t be shown. To log out, just refresh the page or
            press the logout button.
          </p>
        </div>
        <div className="mb-4">
          {user && (
            <div className="rounded-lg m-2 transform duration-500 border-2 border-dBrand dark:border-mainBg bg-lBrand p-2 mx-auto">
              <img
                loading="lazy"
                src={user.picture}
                alt="User Image"
                className="mx-auto overflow-hidden border-2 border-mainBg dark:border-dBrand items-center rounded-lg bg-balBrand dark:bg-secondaryBg"
              />
              <h3 className="inline text-lg font-bold text-dBrand underline">
                Name:
              </h3>
              <p className="inline text-base font-semibold text-dBrand">
                {user.name}
              </p>
              <br />
              <h3 className="inline text-lg font-bold text-dBrand underline">
                Email:
              </h3>
              <p className="inline text-base font-semibold text-dBrand">
                {user.email}
              </p>
              <div className="mt-2">
                <label className="text-dBrand" htmlFor="yourComment">
                  Comment:
                </label>
                <textarea
                  id="yourComment"
                  rows="4"
                  className="inp w-full"
                  placeholder="Comment/Review For the Site. Your Email Will Remain Hidden"
                  name="comment"
                  value={dataBody.comment}
                  onChange={handleInput}
                  required
                ></textarea>
                <AlertBox
                  responseStatus={responseStatus}
                  msgImg={alertImg}
                  className="top-0 z-50"
                />
                <button
                  type="submit"
                  name="send"
                  className="p-4 m-1 btn whitespace-nowrap mx-auto"
                  disabled={isLoading}
                  onClick={handleAPIcalls}
                  aria-label="Send Comment Button"
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
                      Adding...
                    </div>
                  ) : (
                    "Add Comment"
                  )}
                </button>
              </div>
            </div>
          )}
          {user ? (
            <div>
              <button className="btn p-4 mx-auto" onClick={() => setUser(null)}>
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <div
                className="flex items-center bg-lBrand rounded-lg m-10 p-4"
                id="logIn"
              ></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default IdentityGoogle;
