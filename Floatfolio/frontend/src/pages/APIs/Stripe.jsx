import stripeIcon from "./stripe.svg";
import p1 from "./p1.svg";
import p2 from "./p2.svg";
import Card from "../components/CardOne";
import { useState } from "react";
function Stripe() {
  let [quantity, setQuantity] = useState(1);
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
              className="md:p-4 py-2 m-1 px-2 btn whitespace-nowrap mx-auto"
              aria-label="Sign In Button"
              onClick={() => {}}
            >
              CheckOut
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
