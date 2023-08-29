import { useEffect, useState } from "react";

import ipGeoIcon from "./ipgeoIcon.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";

import AlertBox from "../../components/AlertBox";

function IPGeo() {
  const [alertImg, setAlertImg] = useState(sent);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });

  const [toggleCLick, setToggleClick] = useState(false);
  let [dataBody, setDataBody] = useState({
    ip: "",
    period: "3day",
});

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDataBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(dataBody);
  };

  // Backend Implementation
  const handleAPIcalls = async () => {
    setIsLoading(true);
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const clientIp = ipData.ip;
      setDataBody({
        ip: clientIp
      });
      const handleSubmitModule = await import("../../apiCalls/handleAPI.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(dataBody, "ipgeo", "POST")
        .then((res) => {
          if (res.ok) {
            res = res.json();
            return res;
          } else {
            throw new Error("Request failed with status: " + res);
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          setAlertImg(notSent);
          if (error.toString().includes("Failed to fetch")) {
            setResponseStatus({
              status: true,
              text: "Can't Connect To the Server! Check Your Internet Connection",
            });
          } else {
           console.log("error Fetching data:" + error)
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
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center">
            <a href="https://IPGeo.com/">
              <img
                src={ipGeoIcon}
                alt="Weather Logo "
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Mail Chimp API
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tight">
              The IPGeo API is a robust and versatile tool that empowers
              businesses to seamlessly integrate their applications with
              IPGeo&apos;s email marketing and automation platform. With the
              IPGeo API, developers can create custom solutions that enhance
              marketing campaigns, audience engagement, and data management.
              This API enables businesses to automate tasks such as list
              management, campaign creation, and subscriber interactions. <br />
              <br />
              By leveraging the IPGeo API, businesses can unlock the full
              potential of email marketing, streamline their communication
              efforts, and provide a more personalized experience to their
              audience. Whether it&apos;s syncing customer data, automating
              email sends, or tracking campaign performance, the IPGeo API
              offers a powerful way to integrate email marketing functionalities
              into a wide range of applications and platforms. For More details
              about the Power of Mail Chimp, Click on the logo to The left.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>
          <AlertBox
            responseStatus={responseStatus}
            msgImg={alertImg}
            className="top-0"
          />
          <p className=" mt-3 mx-auto text-justify">
            To interact with the IPGeo API, follow these simple steps. Begin by
            entering your email address into the designated email input field.
            You&rsquo;ll notice two subscription options available. If you
            toggle the button to &quot;verified&quot;, the system will initiate
            a verification email before finalizing the subscription on the IPGeo
            site. Conversely, toggling to &quot;unverified&quot; will result in
            a direct subscription without requiring a confirmation email.
            <br />
            <br />
            Please note that this entire process is designed solely for API
            demonstration purposes. When you input your email, it will be
            registered for the newsletter; however, please be aware that no
            promotional emails will be sent. This lack of promotional emails is
            intentional and designed for clear reasons. Feel free to explore the
            functionality of the IPGeo API in this controlled setting.
          </p>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <label className="dark:text-mainBg " htmlFor="RegisterEmail">
              Email:
            </label>
            <input
              id="RegisterEmail"
              type="email"
              className="inp"
              placeholder="name@example.com"
              name="email"
              value={dataBody.email}
              onChange={handleInput}
              required
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
            />
            <div className="text-center text-base  ">
              <p>Verified</p>
              <button
                onClick={() => {
                  setToggleClick(!toggleCLick);
                  if (dataBody.status == "subscribed") {
                    dataBody.status = "pending";
                  } else {
                    dataBody.status = "subscribed";
                  }
                }}
                className="flex justify-center mx-auto cursor-pointer relative w-6 h-11 dark:bg-dBrand bg-mainBg overflow-hidden border-dBrand dark:border-mainBg  border-2 rounded-[999px]"
                aria-label="Dark Mode Switch"
              >
                <div
                  className={`absolute w-5 h-5 dark:bg-mainBg border-[1px] duration-300 border-dBrand dark:border-mainBg rounded-[999px] ${
                    toggleCLick ? "translate-y-full" : ""
                  } bg-lBrand`}
                ></div>
              </button>
              <p>Un-Verified</p>
            </div>
          </div>
          <button
            name="send"
            className="p-4 m-1 btn whitespace-nowrap mx-auto"
            onClick={() => {
              handleAPIcalls();
            }}
            disabled={isLoading}
            aria-label="Check Out Button"
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
                Fetching Api...
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </section>
    </>
  );
}
export default IPGeo;
