import DivApi from "./DivApi";
import stripeImg from './stripe.svg';
function APIs() {
  return (
    <>
      <section className="mainContent">
        <h1>APIs</h1>
        <div className="grid md:grid-cols-3 ">
        <DivApi difficulty={"Basic"} />
        <DivApi route={"/stripe"} difficulty={"Intermediate"} divImg={stripeImg} divHeading={"Stripe Payments"} description = {"Stripe Payment API integration involves incorporating Stripe's payment processing functionality into a web application. This allows users to make secure online payments using various payment methods, such as credit cards and digital wallets. By integrating the Stripe API, businesses can seamlessly handle transactions, manage subscriptions, and process payments, providing a smooth and reliable payment experience for their customers."}/>
        <DivApi difficulty={"Advance"}/>
        </div>
      </section>
    </>
  );
}
export default APIs;
