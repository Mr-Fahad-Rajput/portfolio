import { Suspense, lazy, useEffect, useState } from "react";
const DivApi = lazy(() => import("./DivApi.jsx"));

import DivProjects from "./Projects/DivProjects";
import ec from "./Projects/test.webp";
import ks from "./Projects/ksyndicates.webp";
import sc from "./Projects/simpleCorp.webp";
import chatDemo from "./Projects/chatDemo.jpg";
import three from "./Projects/three.svg";
import vanilla from "./Projects/vanillaJs.svg";
import gsap from "./Projects/gsap.svg";
import blender from "./Projects/blender.svg";
import nextjs from "./Projects/nextjs.svg";
import vercel from "./Projects/vercel.svg";
import bootstrap from "./Projects/bootstrap.svg";
import less from "./Projects/less.svg";
import fa from "./Projects/font-awesome-seeklogo.com.svg";
import reactLogo from "./Projects/react.svg";
import mongo from "./Projects/mongo.svg";
import node from "./Projects/node.svg";
import express from "./Projects/express.png";
import blob from "./Projects/blob.png";
import fireworks from "./Projects/fireworks.png";
import redux from "./Projects/redux.svg";
import psql from "./Projects/psql.svg";
import ghpIcon from "../Contact/github.svg";

function APIs(props) {
  const { apiDivsToShow, setApiDivsToShow, apiDivsImages, setApiDivsImages } = props;

  useEffect(() => {
    const maxApiDivs = 4;
    const timer = setInterval(() => {
      if (apiDivsToShow < maxApiDivs) {
        if (apiDivsToShow == 0) {
          import("./MailChimp/mailChimp.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              mailChimp: img.default,
            }));
          });
          import("./Stripe/stripe.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              stripeImg: img.default,
            }));
          });
          import("./Maps/maps.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              map: img.default,
            }));
          });
        } else if (apiDivsToShow == 1) {
          import("./IdentityGoogle/gAuthIcon.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              gOAuthIcon: img.default,
            }));
          });
          import("./IPGeo/ipgeoIcon.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              ipGeoIcon: img.default,
            }));
          });
          import("./CloudVision/cloudVision.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              visionIcon: img.default,
            }));
          });
        }
        else if (apiDivsToShow == 2) {
          import("./OpenAI/whisper.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              whisperIcon: img.default,
            }));
          });
          import("./OpenAI/dalle.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              dalleIcon: img.default,
            }));
          });
          import("./OpenAI/ChatGPT.svg").then((img) => {
            setApiDivsImages((prevImages) => ({
              ...prevImages,
              chatIcon: img.default,
            }));
          });
        }
        setApiDivsToShow(apiDivsToShow + 1);
      } else {
        clearInterval(timer);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [apiDivsToShow]);
  const ecTechStack = [
    { name: "Three.js", logo: three },
    { name: "Vanilla Js", logo: vanilla },
    { name: "GSAP ", logo: gsap },
    { name: "Blender 3D ", logo: blender },
  ];
  const cbTechStack = [
    { name: "React", logo: reactLogo },
    { name: "Next Js", logo: nextjs},
    { name: "OpenAI", logo: apiDivsImages.chatIcon },
    { name: "Fireworks", logo: fireworks },
    { name: "Node", logo: node },
    { name: "Blob", logo: blob },
    { name: "Vercel", logo: vercel },
    { name: "PSQL", logo: psql},
  ];
  const ksTechStack = [
    { name: "Bootstrap", logo: bootstrap },
    { name: "Vanilla Js", logo: vanilla },
    { name: "Less ", logo: less },
    { name: "Font Awesome", logo: fa },
    { name: "GH-pages", logo: ghpIcon },
  ];
  const scTechStack = [
    { name: "React", logo: reactLogo },
    { name: "Vanilla Js", logo: vanilla },
    { name: "Express", logo: express },
    { name: "Node", logo: node },
    { name: "Mongo DB", logo: mongo },
    { name: "Redux", logo: redux },
    { name: "GH-pages", logo: ghpIcon },
  ];
  return (
    <>
      <section className="mainContent">
        <h1 className="w-full text-center mb-4 border-y-2 dark:border-mainBg  border-dBrand     dark:text-secondaryBg text-2xl font-bold underline cursor-default text-balBrand">
          Projects
        </h1>
        <div>
        <DivProjects
            route={"https://chat.faadii.systems"}
            divImg={chatDemo}
            divHeading={"AI Chatbot 'TechMate'"}
            description={
              "'TechMate' is a demo chatbot designed to showcase a seamless and intelligent conversational experience. Built with cutting-edge AI and powered by advanced web technologies, it serves as an example of Fahad Rajput's expertise in full-stack development and DevOps. The chatbot is designed to assist users with various queries while maintaining a professional and user-friendly interface."
            }
            sourceCode={
              null
            }
            techStack={cbTechStack}
          />
          <DivProjects
            route={"https://mr-fahad-rajput.github.io/Simple-Corp/"}
            divImg={sc}
            divHeading={"Simple Corp"}
            description={
              "'SimpleCorp' represents a web template design tailored for a Business Consultancy Firm. Designed with precision and attention to detail, 'SimpleCorp' offers a seamless user experience. Its clean and functional interface serves as an ideal platform for a consultancy business to showcase its expertise and services. It's a Demo, so the logins are not Working as the Server is Inactive."
            }
            sourceCode={
              "https://github.com/Mr-Fahad-Rajput/Simple-Corp"
            }
            techStack={scTechStack}
          />
          <DivProjects
            route={"https://portfolio3d.faadii.systems/"}
            divImg={ec}
            divHeading={"The Encoded Chamber"}
            description={
              "The Encoded Chamber' reflects my journey as a Web developer during my early days in web development. It's a Project that combines creativity and technology, utilizing Three.js, Vanilla JavaScript, and Blender for 3D modeling to bring my vision to life. GSAP scroll triggers and timelines add interactivity, making it engaging for visitors. Notably, I Used the 'Singleton' Design Pattern for efficient code structure."
            }
            sourceCode={
              "https://github.com/Mr-Fahad-Rajput/portfolio/tree/main/The-Encoded-Chamber"
            }
            techStack={ecTechStack}
          />
          <DivProjects
            route={"https://mr-fahad-rajput.github.io/K.Syndicates/"}
            divImg={ks}
            divHeading={"WebTech Layout"}
            description={
              "WebTech Layout is a fully responsive website design tailored for a Software House. This project features a sleek and user-friendly interface achieved through the use of Bootstrap, Awesome-font, LESS stylesheets, and JavaScript. Various third-party libraries, such as circliful, countdown, isotope, layerslider, and owl-carousel, just to name a few, have been integrated to enhance the design and functionality. Please note that the preview showcases a template, not the Actual Site. "
            }
            sourceCode={"https://github.com/Mr-Fahad-Rajput/K.Syndicates"}
            techStack={ksTechStack}
          />
        </div>
        <h1 className="w-full text-center mb-4 border-y-2 dark:border-mainBg  border-dBrand     dark:text-secondaryBg text-2xl font-bold underline cursor-default text-balBrand">
          APIs
        </h1>
        <div className="grid md:grid-cols-3">
          <Suspense
            fallback={
              <>
                <div className="animate-spin">
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
              </>
            }
          >
            {apiDivsToShow > 0 ? (
              <>
                <DivApi
                  route={"/mailchimp"}
                  difficulty={"Basic"}
                  divImg={apiDivsImages.mailChimp}
                  divHeading={"Mail Chimp Emails"}
                  description={
                    "Mailchimp API is a versatile tool that lets businesses integrate their apps with Mailchimp's email marketing platform. It automates tasks like list management and campaign creation, enhancing marketing efforts and providing personalized communication. This API empowers businesses to streamline email marketing, sync data, automate sends, and track performance across various platforms. This API enables businesses to automate tasks such as list management, campaign creation, and subscriber interactions. By using the Mailchimp API, businesses can unlock the full potential of email marketing. "
                  }
                />
                <DivApi
                  route={"/stripe"}
                  difficulty={"Intermediate"}
                  divImg={apiDivsImages.stripeImg}
                  divHeading={"Stripe Payments"}
                  description={
                    "Stripe Payment API integration involves incorporating Stripe's payment processing functionality into a web application. This allows users to make secure online payments using various payment methods, such as credit cards and digital wallets. By integrating the Stripe API, businesses can seamlessly handle transactions, manage subscriptions, and process payments, providing a smooth and reliable payment experience for their customers.with Stripe you can Accept payments and to make Your Business scale faster. Stripe is the Most used Payment Platform Across the globe."
                  }
                />
                <DivApi
                  route={"/maps"}
                  difficulty={"Advance"}
                  divImg={apiDivsImages.map}
                  divHeading={"Google Maps API"}
                  description={
                    "The Google Maps API is a versatile and robust tool that allows developers to integrate dynamic maps and location-based services into their web applications. With its easy-to-use interfaces and powerful functionalities, the Google Maps API empowers developers to create interactive maps, display geographic information, and provide users with seamless navigation experiences. Businesses can use this API to enhance their applications with features like custom markers, directions, geolocation, street view, and geocoding. For a live Demonstration click this Card"
                  }
                />
              </>
            ) : (
              <>
                <div className="animate-spin">
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
              </>
            )}
            {apiDivsToShow > 1 && (
              <>
                <DivApi
                  route={"/oauthgoogle"}
                  difficulty={"Basic"}
                  divImg={apiDivsImages.gOAuthIcon}
                  divHeading={"Google OAuth 2.0"}
                  description={
                    "Google's OAuth API is a secure way for users to give permission to apps or websites to access their Google account information without sharing their actual password. It helps businesses by allowing them to integrate Google services into their own apps or websites. For instance, an online store could use OAuth to let customers sign in with their Google accounts, making the process easier. This can enhance user experience and trust, as customers don't need to create new accounts. Additionally, businesses can use OAuth to access data like Google Calendar or Drive, improving productivity and offering more personalized services. This convenience and data access can attract more users and help businesses expand."
                  }
                />
                <DivApi
                  route={"/ipgeo"}
                  difficulty={"Intermediate"}
                  divImg={apiDivsImages.ipGeoIcon}
                  divHeading={"Weather & Geolocation"}
                  description={
                    "IP Geolocation and Weather APIs offer significant benefits to businesses. The IP Geolocation API empowers companies to precisely identify the geographical location associated with an IP address. This enables them to create customized user experiences and targeted marketing campaigns based on location data. Meanwhile, Weather APIs provide businesses with up-to-date and predictive weather information, which proves invaluable for delivering tailored recommendations, optimizing day-to-day operations, and ultimately elevating overall customer satisfaction. By leveraging these APIs, businesses can strategically enhance user engagement through effective marketing strategies and achieve operational excellence across various industry sectors."
                  }
                />
                <DivApi
                  route={"/cloudvision"}
                  difficulty={"Advance"}
                  divImg={apiDivsImages.visionIcon}
                  divHeading={"Google Cloud Vision"}
                  description={
                    "Google Vision API is a powerful tool that allows businesses to harness the capabilities of artificial intelligence to analyze and understand images and videos. By integrating it into websites, businesses can enhance user experiences in various ways. For instance, it can automatically classify and tag images, making content more searchable and organized. It can also detect objects, faces, and text within images, opening up possibilities for personalized user interactions and improved content recommendations. Overall, Google Vision API empowers websites to provide richer and more interactive experiences, making it a valuable asset for businesses looking to engage their audience and deliver tailored content."
                  }
                />
              </>
            )}
            {apiDivsToShow > 2 && (
              <>
                {" "}
                <DivApi
                  route={"/whisper"}
                  difficulty={"Basic"}
                  divImg={apiDivsImages.whisperIcon}
                  divHeading={"Whisper"}
                  description={
                    "Whisper by OpenAI is an automatic speech recognition (ASR) system that converts spoken language into written text. It excels in accurately transcribing spoken words across a wide range of applications. This integration enables businesses to offer transcription services for meetings, customer support calls, and content creation. It can also improve accessibility by providing real-time captions for webinars and videos, making it particularly valuable for visually impaired individuals. Ultimately, by incorporating Whisper AI into their digital platforms, businesses can enhance communication, accessibility, and content generation, thereby fostering growth and delivering a more inclusive and efficient user experience.Businesses can leverage Whisper to enhance their services by integrating its API into their websites or applications, enabling precise and efficient speech-to-text conversion. "
                  }
                />
                <DivApi
                  route={"/dalle"}
                  difficulty={"Intermediate"}
                  divImg={apiDivsImages.dalleIcon}
                  divHeading={"Dalle 2"}
                  description={
                    "The DALL·E 2 API is a cutting-edge artificial intelligence tool that empowers businesses to integrate advanced image generation capabilities into their websites and applications. By leveraging DALL·E 2, companies can create unique and customized visual content, from artwork and designs to product images and branding materials, all generated by AI. This API enables businesses to streamline their creative processes, save time and resources, and deliver visually captivating content to their audience. Integration of the DALL·E 2 API can profoundly impact businesses by enhancing visual storytelling, attracting and retaining customers with eye-catching visuals, and ultimately driving growth through compelling and visually appealing brand experiences. Businesses can transform their creative visions into stunning visuals effortlessly, revolutionizing their content creation and brand communication strategies."
                  }
                />
                <DivApi
                  route={"/chat"}
                  difficulty={"Advance"}
                  divImg={apiDivsImages.chatIcon}
                  divHeading={"Chat GPT"}
                  description={
                    "The ChatGPT API is a powerful tool that enables businesses to integrate cutting-edge natural language processing into their websites and applications. By doing so, they can provide seamless and efficient customer support, streamline content creation, and enhance user engagement. This API allows businesses to automate responses to common customer queries, generate human-like text, and create interactive chatbots, ultimately improving user experiences and increasing operational efficiency. Integration of the ChatGPT API can significantly enhance customer satisfaction, boost productivity, and drive growth by providing valuable, on-demand information and assistance to users. ChatGPT API offers businesses the ability to scale their customer interactions effortlessly, ensuring that they can handle a growing user base without compromising on the quality of service."
                  }
                />
              </>
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
}
export default APIs;
