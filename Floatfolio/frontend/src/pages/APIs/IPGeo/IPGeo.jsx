import { useEffect, useState } from "react";

import ipGeoIcon from "./ipgeoIcon.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";

import AlertBox from "../../components/AlertBox";

function IPGeo() {
  const [alertImg, setAlertImg] = useState(sent);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });

  let [dataBody, setDataBody] = useState({
    ip: "",
    period: "3day",
});
useEffect(()=>{
    const handleAPIcalls = async () => {
        try {
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipResponse.json();
          const clientIp = ipData.ip;
          setDataBody({
            ip: clientIp
          });
          const handleSubmitModule = await import("../../apiCalls/handleAPI.js");
          const handleSubmit = handleSubmitModule.default;
          handleSubmit(dataBody, "ipgeo", "POST")
            .then((res) => {
              if (res.ok) {
                res = res.json();
                return res;
              } else {
                throw new Error("Request failed with status: " + res);
              }
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              setAlertImg(notSent);
              if (error.toString().includes("Failed to fetch")) {
                setResponseStatus({
                  status: true,
                  text: "Can't Connect To the Server! Check Your Internet Connection",
                });
              } else {
               console.log("error Fetching data:" + error)
              }
            })
            .finally(() => {
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
      handleAPIcalls();

},[])

  
  
  

  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center">
            <a href="https://IPGeo.com/">
              <img
                src={ipGeoIcon}
                alt="Weather Logo "
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Mail Chimp API
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tight">
              The IPGeo API is a robust and versatile tool that empowers
              businesses to seamlessly integrate their applications with
              IPGeo&apos;s email marketing and automation platform. With the
              IPGeo API, developers can create custom solutions that enhance
              marketing campaigns, audience engagement, and data management.
              This API enables businesses to automate tasks such as list
              management, campaign creation, and subscriber interactions. <br />
              <br />
              By leveraging the IPGeo API, businesses can unlock the full
              potential of email marketing, streamline their communication
              efforts, and provide a more personalized experience to their
              audience. Whether it&apos;s syncing customer data, automating
              email sends, or tracking campaign performance, the IPGeo API
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
          <AlertBox
            responseStatus={responseStatus}
            msgImg={alertImg}
            className="top-0"
          />
          <p className=" mt-3 mx-auto text-justify">
            To interact with the IPGeo API, follow these simple steps. Begin by
            entering your email address into the designated email input field.
            You&rsquo;ll notice two subscription options available. If you
            toggle the button to &quot;verified&quot;, the system will initiate
            a verification email before finalizing the subscription on the IPGeo
            site. Conversely, toggling to &quot;unverified&quot; will result in
            a direct subscription without requiring a confirmation email.
            <br />
            <br />
            Please note that this entire process is designed solely for API
            demonstration purposes. When you input your email, it will be
            registered for the newsletter; however, please be aware that no
            promotional emails will be sent. This lack of promotional emails is
            intentional and designed for clear reasons. Feel free to explore the
            functionality of the IPGeo API in this controlled setting.
          </p>
        </div>
        <div className="mb-4">
        <div className="w-full max-w-sm mx-auto">
  <div className="bg-white shadow rounded-lg p-5 dark:bg-gray-800 w-full" >
	<h2 className="font-bold text-gray-800 text-lg dark:text-gray-400" >Date Here</h2>
	
		<div>
			<div className="flex mt-4 mb-2">
				<div className="flex-1">
					<div className="text-gray-600 text-sm dark:text-gray-400" ><p>"City, Region"</p></div>
					<div className="text-3xl font-bold text-gray-800 dark:text-gray-300" ><p>Temp in C</p></div>
					<div className="text-xs text-gray-600 dark:text-gray-400"><p>Current COndition</p></div>
				</div>
				<div className="w-24">
					<img src={ipGeoIcon} loading="lazy"/>
				</div>
			</div>

			<div className="flex space-x-2 justify-between border-t dark:border-gray-500">
					<div className="flex-1 text-center pt-3 border-r dark:border-gray-500" >
						<div className="text-xs text-gray-500 dark:text-gray-400"><p>Fore CAst date</p></div>
						<img src={ipGeoIcon} alt="Today Conditiont" loading="lazy" className="mx-auto"/>
						<div className="font-semibold text-gray-800 mt-1.5 dark:text-gray-300"><p>Forecst temp</p></div>
						<div className="text-xs text-gray-600 dark:text-gray-400"> <p>FOrecast COndition</p> </div>
					</div>
			</div>
		</div>

</div>
  
  
</div>
        </div>
      </section>
    </>
  );
}
export default IPGeo;
