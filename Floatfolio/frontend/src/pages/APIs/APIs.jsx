import DivApi from "./DivApi";
import stripeImg from './stripe.svg';
import mailChimp from './mailChimp.svg';
function APIs() {
  return (
    <>
      <section className="mainContent">
        <h1>APIs</h1>
        <div className="grid md:grid-cols-3 ">
        <DivApi route={"/mailchimp"} difficulty={"Basic"} divImg={mailChimp} divHeading={"Mail Chimp Emails"} description={"The Mailchimp API is a versatile tool that lets businesses integrate their apps with Mailchimp's email marketing platform. It automates tasks like list management and campaign creation, enhancing marketing efforts and providing personalized communication. This API empowers businesses to streamline email marketing, sync data, automate sends, and track performance across various platforms."} />
        <DivApi route={"/stripe"} difficulty={"Intermediate"} divImg={stripeImg} divHeading={"Stripe Payments"} description = {"Stripe Payment API integration involves incorporating Stripe's payment processing functionality into a web application. This allows users to make secure online payments using various payment methods, such as credit cards and digital wallets. By integrating the Stripe API, businesses can seamlessly handle transactions, manage subscriptions, and process payments, providing a smooth and reliable payment experience for their customers."}/>
        <DivApi difficulty={"Advance"}/>
        </div>
      </section>
    </>
  );
}
export default APIs;
