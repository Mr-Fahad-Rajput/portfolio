import { useEffect, useState } from "react";

import saleIcon from "./salesForce.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";

import AlertBox from "../../components/AlertBox";

function SalesForce() {
  const [alertImg, setAlertImg] = useState(sent);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });

  const [toggleCLick, setToggleClick] = useState(false);
  let [dataBody, setDataBody] = useState({
    email: "",
    status: "pending",
  });
  useEffect(() => {
    const hashFragment = window.location.hash;

    if (hashFragment === "#success") {
      setResponseStatus({
        status: true,
        text: "Sucessfully Subscribed to The News Letter!",
      });
      setTimeout(() => {
        setResponseStatus({
          status: false,
        });
      }, 3000);
      setDataBody({ ...dataBody, email: "" });
    } else if (hashFragment === "#cancel") {
      setAlertImg(notSent);
      setResponseStatus({
        status: true,
        text: "Subscription Didn't work :(",
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
  };

  // Backend Implementation
  const handleAPIcalls = async () => {
    setIsLoading(true);
    try {
      const handleSubmitModule = await import("../../apiCalls/handleAPI.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(dataBody, "SalesForce", "POST")
        .then((res) => {
          if (res.ok) {
            res = res.json();
            return res;
          } else {
            throw new Error("Request failed with status: " + res);
          }
        })
        .then((data) => {
          console.log(data.urlRes);
          const redirectUrl = data.urlRes;
          window.location = redirectUrl;
          location.reload();
        })
        .catch((error) => {
          setAlertImg(notSent);
          if (error.toString().includes("Failed to fetch")) {
            setResponseStatus({
              status: true,
              text: "Can't Connect To the Server! Check Your Internet Connection",
            });
          } else {
            const redirectUrl = "http://localhost:5173/SalesForce#cancel";
            window.location = redirectUrl;
            location.reload();
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
            <a href="https://Salesforce.com/">
              <img
                src={saleIcon}
                alt="Mail Chimp Ilustration"
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Mail Chimp API
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tight">
              The SalesForce API is a robust and versatile tool that empowers
              businesses to seamlessly integrate their applications with
              SalesForce&apos;s email marketing and automation platform. With the
              SalesForce API, developers can create custom solutions that enhance
              marketing campaigns, audience engagement, and data management.
              This API enables businesses to automate tasks such as list
              management, campaign creation, and subscriber interactions. <br />
              <br />
              By leveraging the SalesForce API, businesses can unlock the full
              potential of email marketing, streamline their communication
              efforts, and provide a more personalized experience to their
              audience. Whether it&apos;s syncing customer data, automating
              email sends, or tracking campaign performance, the SalesForce API
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
          
          <p className=" mt-3 mx-auto text-justify">
           test
            
          </p>
        </div>
        <div className="mb-4">
          
        </div>
      </section>
    </>
  );
}
export default SalesForce;
