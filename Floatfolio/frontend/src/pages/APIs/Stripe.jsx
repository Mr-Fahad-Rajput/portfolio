import stripeIcon from '../APIs/stripe.svg';
function Stripe() {
  
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
              In this section, I&rsquo;ve showcased an integration of the Stripe Payment API. Please note that this page is designed solely to demonstrate the API integration. The products displayed are for illustrative purposes only and do not represent actual offerings. The &rsquo;Dummy cart&rsquo; allows you to adjust product quantities, but you cannot add or remove Products. When you click the &rsquo;Checkout&rsquo; button, you&rsquo;ll be directed to the Stripe API&rsquo;s checkout process. To simulate payment success or cancellation, you can use the card number &rsquo;4242&rsquo; for all fields, as shown in the card image. This integration highlights my ability to incorporate external payment gateways into web applications, ensuring a seamless user experience.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  export default Stripe;
  