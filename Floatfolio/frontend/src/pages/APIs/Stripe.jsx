import stripeIcon from "./stripe.svg";
import p1 from "./p1.svg";
import p2 from "./p2.svg";
import Card from "../components/CardOne";
import { useState } from "react";
function Stripe() {
  let [quantity, setQuantity] = useState(1);
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
  
  let [total, setTotal] = useState(quantity * 50 + (quantity + 1) * 10);
  function incrementquantity() {
    quantity = quantity + 1;
    setQuantity(quantity);
    setTotal(quantity * 50 + (quantity + 1) * 10);
  }
  function decrementquantity() {
    if (quantity >= 1) {
      quantity = quantity - 1;
      setQuantity(quantity);
      setTotal(quantity * 50 + (quantity + 1) * 10);
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
            console.log(res);
            return res.json();
        }
        return res.json().then(json => Promise.reject(json))
        })
        .then((url) => {
          window.location = url;
        })
        .catch((err) => {
          console.error("Error:", err);
        })
        .finally(setIsLoading(false));
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    }
    ///////////////////////////////////
    // console.log(dataBody);
    
    // console.log(error);
    // if (error.toString().includes("Failed to fetch")) {
    //   delay = 4000;
    //   setResponseStatus({
    //     status: true,
    //     text: "Can't Connect To the Server! Check Your Internet Connection",
    //   });
    // }
  };
  return (
    <>
      <section className="mainContent">
        <div className="text-center">
          <div className="inline-flex w-64  md:float-left place-items-center">
            <img
              src={stripeIcon}
              alt="Credit Card Ilustration"
              className=" w-64 h-56 hover:scale-110 transform duration-500"
            />
          </div>
          <div className="overflow-hidden pt-2">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Stripe API Integration
            </h1>
            <p className=" mt-3 mx-auto text-justify ">
              In this section, I&rsquo;ve showcased an integration of the Stripe
              Payment API. Please note that this page is designed solely to
              demonstrate the API integration. The products displayed are for
              illustrative purposes only and do not represent actual offerings.
              The &rsquo;Dummy cart&rsquo; allows you to adjust product
              quantities, but you cannot add or remove Products. When you click
              the &rsquo;Checkout&rsquo; button, you&rsquo;ll be directed to the
              Stripe API&rsquo;s checkout process. To simulate payment success
              or cancellation, you can use the card number &rsquo;4242&rsquo;
              for all fields, as shown in the card image. This integration
              highlights my ability to incorporate external payment gateways
              into web applications, ensuring a seamless user experience.
            </p>
          </div>
        </div>
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
