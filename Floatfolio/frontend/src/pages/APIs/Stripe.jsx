import stripeIcon from "./stripe.svg";
import p1 from "./p1.svg";
import p2 from "./p2.svg";
import sent from "../../assets/sent.svg";
import notSent from "../../assets/notsent.svg";
import Card from "../components/CardOne";
import { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";
function Stripe() {
  let [quantity, setQuantity] = useState(1);
  const [alertImg, setAlertImg] = useState(sent);
  const [isLoading, setIsLoading] = useState(false);
  let [dataBody, setDataBody] = useState([
    {
      id: 1,
      quantity: quantity,
    },
    {
      id: 2,
      quantity: quantity + 1,
    },
  ]);
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

  function setProductQuantities() {
    setDataBody([
      {
        id: 1,
        quantity: quantity,
      },
      {
        id: 2,
        quantity: quantity + 1,
      },
    ]);
  }

  let [total, setTotal] = useState(quantity * 50 + (quantity + 1) * 10);
  function incrementquantity() {
    quantity = quantity + 1;
    setQuantity(quantity);
    setTotal(quantity * 50 + (quantity + 1) * 10);
    setProductQuantities();
  }
  function decrementquantity() {
    if (quantity >= 1) {
      quantity = quantity - 1;
      setQuantity(quantity);
      setTotal(quantity * 50 + (quantity + 1) * 10);
      setProductQuantities();
    } else alert("Both Product's Quantity Can't Be Zero");
  }
  // Backend Implementation
  const handleAPIcalls = async () => {
    setIsLoading(true);
    try {
      const handleSubmitModule = await import("../apiCalls/handleAPI.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(dataBody, "stripe", "POST")
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
          if (error.toString().includes("Failed to fetch")){ 
            setResponseStatus({
                status: true,
                text: "Can't Connect To the Server! Check Your Internet Connection",
            });
            }
         else{setResponseStatus({
                  status: true,
                  text: error.toString(),
              });}
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
          <div className="inline-flex w-64  md:float-left place-items-center">
            <img
              src={stripeIcon}
              alt="Credit Card Ilustration"
              className=" w-64 h-56 hover:scale-110 transform duration-500 cursor-pointer"
            />
          </div>
          <div className="overflow-hidden pt-2 mx-2  cursor-default">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Stripe API Integration
            </h1>
            <p className=" mt-3 mx-auto text-justify ">
              In this section, I&rsquo;ve showcased an integration of the Stripe
              Payment API. Please note that this page is designed solely to
              demonstrate the API integration. The products displayed are for
              illustrative purposes only and do not represent actual offerings.
              The &rsquo;Dummy cart&rsquo; allows you to adjust product
              quantities, but you cannot add or remove Products.  This integration
              highlights my ability to incorporate external payment gateways
              into web applications, ensuring a seamless user experience.
            </p>
          </div>
        </div>
          <AlertBox
            responseStatus={responseStatus}
            msgImg={alertImg}
            className="top-0"
          />
            <div className="mx-2 text-center md:px-10 cursor-default"><h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">How To</h3>
            <p className=" mt-3 mx-auto text-justify"> When you click
              the &rsquo;Checkout&rsquo; button, you&rsquo;ll be directed to the
              Stripe API&rsquo;s checkout process. To simulate different scenarios during testing, you can use the following card numbers along with the respective details:<br/><br/>
              <b>For Success</b>: Use card number &#34;4242 4242 4242 4242. This will simulate a successful payment.<br/>
              <b>For Failure</b>: Use card number 4000 0000 0000 9995. This will simulate a failed payment.<br/>
              <b>Success with Verification</b>: Use card number 4000 0000 0000 9995. This will simulate a failed payment.<br/><br/>
              Feel free to enter any valid expiration date, CVV, and postal code when prompted.
Please note that these card numbers are provided by Stripe for testing purposes in their testing environment. Always make sure to follow best security practices and avoid using real payment information for testing.
             </p></div >
         
        <div className="bg-secondaryBg dark:bg-balBrand rounded-lg m-2 md:flex w-full justify-around">
          <Card
            cardImg={p1}
            cardHeading={"50$ Container"}
            subHeading={"Quantity:"}
            difPercntage={quantity}
          />{" "}
          <div className="grid grid-cols-1 place-content-center text-center ">
            <div>
              <button
                className="m-2 py-2 px-4 bg-lBrand hover:bg-mainBg dark:bg-mainBg dark:hover:bg-lBrand text-4xl border-2 border-dBrand text-dBrand font-semibold rounded-lg"
                onClick={incrementquantity}
              >
                +
              </button>
              <button
                className="m-2 py-2 px-5 bg-lBrand hover:bg-mainBg dark:bg-mainBg dark:hover:bg-lBrand text-4xl border-2 border-dBrand text-dBrand font-semibold rounded-lg"
                onClick={decrementquantity}
              >
                -
              </button>
            </div>
            <div>
              <h2 className="py-2 px-4 bg-lBrand hover:bg-mainBg dark:bg-mainBg dark:hover:bg-lBrand text-4xl border-2 border-dBrand text-dBrand font-semibold rounded-lg">
                Total:{total}$
              </h2>
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
                "Check Out"
              )}
            </button>
          </div>
          <Card
            cardImg={p2}
            cardHeading={"10$ GiftCard"}
            subHeading={"Quantity:"}
            difPercntage={quantity + 1}
          />
        </div>
      </section>
    </>
  );
}
export default Stripe;
