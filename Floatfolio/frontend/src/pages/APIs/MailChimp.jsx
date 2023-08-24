import mailIcon from "./mailChimp.svg";
import sent from "../../assets/sent.svg";
import notSent from "../../assets/notsent.svg";
import { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";
function Stripe() {
  const [alertImg, setAlertImg] = useState(sent);
  const [isLoading, setIsLoading] = useState(false);
  let [dataBody, setDataBody] = useState({
    email: "",
  });
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });
  useEffect(() => {
    const hashFragment = window.location.hash;

    if (hashFragment === "#success") {
      setResponseStatus({
        status: true,
        text: "Payment Was Successful",
      });
      setTimeout(() => {
        setResponseStatus({
          status: false,
        });
      }, 3000);
    } else if (hashFragment === "#cancel") {
      setAlertImg(notSent);
      setResponseStatus({
        status: true,
        text: "Transaction was Canceled.",
      });
      setTimeout(() => {
        setResponseStatus({
          status: false,
        });
      }, 3000);
    }
  }, []);

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
      const handleSubmitModule = await import("../apiCalls/handleAPI.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(dataBody, "mailchimp", "POST")
        .then((res) => {
          if (res.ok) {
            res = res.json();
            return res;
          } else {
            throw new Error("Request failed with status: " + res);
          }
        })
        .then((data) => {
          const redirectUrl = data.url;
          window.location = redirectUrl;
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
          <div className=" inline-flex w-64 md:my-10 h-full md:float-left place-items-center">
            <img
              src={mailIcon}
              alt="Mail Chimp Ilustration"
              className=" w-64 h-56 hover:scale-110 transform duration-500"
            />
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Stripe API Integration
            </h1>
            <p className=" mt-3 mx-auto text-justify ">
              The Mailchimp API is a robust and versatile tool that empowers
              businesses to seamlessly integrate their applications with
              Mailchimp&apos;s email marketing and automation platform. With the
              Mailchimp API, developers can create custom solutions that enhance
              marketing campaigns, audience engagement, and data management.
              This API enables businesses to automate tasks such as list
              management, campaign creation, and subscriber interactions. By
              leveraging the Mailchimp API, businesses can unlock the full
              potential of email marketing, streamline their communication
              efforts, and provide a more personalized experience to their
              audience. Whether it&apos;s syncing customer data, automating
              email sends, or tracking campaign performance, the Mailchimp API
              offers a powerful way to integrate email marketing functionalities
              into a wide range of applications and platforms.
            </p>
          </div>
        </div>
        <AlertBox
          responseStatus={responseStatus}
          msgImg={alertImg}
          className="top-0"
        />
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To
          </h3>
          <p className=" mt-3 mx-auto text-justify">
            {" "}
            When you click the &rsquo;Checkout&rsquo; button, you&rsquo;ll be
            directed to the Stripe API&rsquo;s checkout process. To simulate
            different scenarios during testing, you can use the following card
            numbers along with the respective details:
            <br />
            <br />
            <b>For Success</b>: Use card number &#34;4242 4242 4242 4242. This
            will simulate a successful payment.
            <br />
            <b>For Failure</b>: Use card number 4000 0000 0000 9995. This will
            simulate a failed payment.
            <br />
            <b>Success with Verification</b>: Use card number 4000 0000 0000
            9995. This will simulate a failed payment.
            <br />
            <br />
            Feel free to enter any valid expiration date, CVV, and postal code
            when prompted. Please note that these card numbers are provided by
            Stripe for testing purposes in their testing environment. Always
            make sure to follow best security practices and avoid using real
            payment information for testing.
          </p>
        </div>
        <div className="mb-4">
          <div>
            <label className="dark:text-mainBg " htmlFor="RegisterEmail">
              {" "}
              Email:{" "}
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
export default Stripe;
