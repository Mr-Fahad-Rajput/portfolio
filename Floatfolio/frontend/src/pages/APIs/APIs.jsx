import stripeImg from './Stripe/stripe.svg';
import mailChimp from './MailChimp/mailChimp.svg';
import map from './Maps/maps.svg';

import DivApi from "./DivApi";
function APIs() {
  return (
    <>
      <section className="mainContent">
        <h1>APIs</h1>
        <div className="grid md:grid-cols-3 ">
        <DivApi route={"/mailchimp"} difficulty={"Basic"} divImg={mailChimp} divHeading={"Mail Chimp Emails"} description={"Mailchimp API is a versatile tool that lets businesses integrate their apps with Mailchimp's email marketing platform. It automates tasks like list management and campaign creation, enhancing marketing efforts and providing personalized communication. This API empowers businesses to streamline email marketing, sync data, automate sends, and track performance across various platforms. This API enables businesses to automate tasks such as list management, campaign creation, and subscriber interactions. By using the Mailchimp API, businesses can unlock the full potential of email marketing. "} />
        <DivApi route={"/stripe"} difficulty={"Intermediate"} divImg={stripeImg} divHeading={"Stripe Payments"} description = {"Stripe Payment API integration involves incorporating Stripe's payment processing functionality into a web application. This allows users to make secure online payments using various payment methods, such as credit cards and digital wallets. By integrating the Stripe API, businesses can seamlessly handle transactions, manage subscriptions, and process payments, providing a smooth and reliable payment experience for their customers.with Stripe you can Accept payments and to make Your Business scale faster. Stripe is the Most used Payment Platform Across the globe."}/>
        <DivApi route={"/maps"} difficulty={"Advance"} divImg={map} divHeading={"Google Maps API"} description ={"The Google Maps API is a versatile and robust tool that allows developers to integrate dynamic maps and location-based services into their web applications. With its easy-to-use interfaces and powerful functionalities, the Google Maps API empowers developers to create interactive maps, display geographic information, and provide users with seamless navigation experiences. Businesses can use this API to enhance their applications with features like custom markers, directions, geolocation, street view, and geocoding. For a live Demonstration click this Card"}/>
        </div>
      </section>
    </>
  );
}
export default APIs;
