import { useEffect, useState } from "react";

import ipGeoIcon from "./ipgeoIcon.svg";
import conIcon from "./ipgeoIcon.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";
import Loader from "../../components/Loader";

function IPGeo() {
  const [location, setLocation] = useState();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();

  let [dataBody, setDataBody] = useState({
    ip: "",
    period: "3day",
  });
  useEffect(() => {
    const handleAPIcalls = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const clientIp = ipData.ip;
        setDataBody({
          ip: clientIp,
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
            setLocation(data.location);
            setCurrent(data.current);
            setForecast(data.forecast);
          })
          .catch((error) => {
            if (error.toString().includes("Failed to fetch")) {
              console.log(error);
            } else {
              console.log("error Fetching data:" + error);
            }
          });
      } catch (error) {
        console.error("Error importing handleSubmit:", error);
      }
    };
    handleAPIcalls();
  }, []);

  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center">
            <a href="#">
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
          <p className=" mt-3 mx-auto text-justify">Just a Test</p>
        </div>
        <div className="p-2 mx-auto w-full">
          {!location ? (
            <Loader />
          ) : (
            <div className=" text-dBrand text-2xl break-words rounded-lg overflow-hidden mb-4 bg-lBrand dark:bg-balBrand border-2 border-dBrand dark:border-mainBg">
              {/* Daily */}
              <div className="p-2 relative mx-auto">
                <div className="flex flex-wrap mb-4 rounded-lg justify-around mx-auto text-center items-center bg-mainBg dark:bg-lBrand border-2 border-dBrand dark:border-mainBg">
                  <div>
                    <h5 className="mb-0 font-medium text-xl">
                      {location.name},{location.country}
                    </h5>
                    <h6 className="mb-0">{location.localtime}</h6>
                  </div>
                  <div>
                    <img src={conIcon} alt="Current Condition" />
                    <p className="text-xl">{current.condition.text}</p>
                    {/* TODO setup image for condition */}
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-4xl mb-0">
                      <p>{current.temp_c}&deg;</p>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap place-content-center justify-around items-center text-dBrand">
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.wind_kph}
                        <small className="text-sm">
                          <sup>KM/H</sup>
                        </small>
                      </p>
                      <p className="text-xs">Wind</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.wind_dir}
                      </p>
                      <p className="text-xs">Direction</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.precip_mm}
                        <sup>mm</sup>
                      </p>
                      <p className="text-xs">Precipitation</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.humidity}
                        <sup>%</sup>
                      </p>
                      <p className="text-xs">Humidity</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className=" aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">{current.cloud}<sup>%</sup></p>
                      <p className="text-xs">Clouds</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.feelslike_c}&deg;
    
                      </p>
                      <p className="text-xs">Feels Like</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.vis_km}
                        <sup>KM</sup>
                      </p>
                      <p className="text-xs">Visibility</p>
                    </div>
                  </div>
                  <div className="w-20 h-20 my-2">
                    <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                      <p className="text-xl font-semibold m-2">
                        {current.uv}
                        <sup>/11</sup>
                      </p>
                      <p className="text-xs">UV Index</p>
                    </div>
                  </div>

                  {/* Repeat the same structure for other divs */}
                </div>
              </div>
              {/* Forecast */}
              <div className=" mx-2 text-center bg-transparent whitespace-nowrap">
                <h3 className="my-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
                  Forecast
                </h3>
              </div>
              <div className="p-2 max-md:gap-2 text-center justify-around items-center flex">
                <div className=" flex flex-col bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg mx-auto max-w-max">
                  <p>39.11&deg;</p>
                  <img src={ipGeoIcon} alt="Forecast day 1" />
                  <small className="px-2">Temp</small>
                </div>
                <div className=" flex flex-col bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg mx-auto max-w-max">
                  <p>39.11&deg;</p>
                  <img src={ipGeoIcon} alt="Forecast day 1" />
                  <small className="px-2">Temp</small>
                </div>
                <div className=" flex flex-col bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg mx-auto max-w-max">
                  <p>39.11&deg;</p>
                  <img src={ipGeoIcon} alt="Forecast day 1" />
                  <small className="px-2">Temp</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default IPGeo;
