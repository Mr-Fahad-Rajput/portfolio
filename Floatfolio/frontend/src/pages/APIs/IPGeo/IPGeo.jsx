import { useEffect, useState } from "react";

import ipGeoIcon from "./ipgeoIcon.svg";
import sunset from "./sunset.svg";
import sunrise from "./sunrise.svg";
import moonrise from "./moonrise.svg";
import moonset from "./moonset.svg";
import moonphase from "./moonphase.svg";

function IPGeo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCurrent, setIsCurrent] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [index, setIndex] = useState(3);
  const [conditionImg, setConditionImg] = useState();
  const [con0, setCon0] = useState();
  const [con1, setCon1] = useState();
  const [con2, setCon2] = useState();
  const [location, setLocation] = useState();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [dataBody, setDataBody] = useState({
    ip: "",
    period: "3day",
  });
  useEffect(() => {
    const handleAPIcalls = async () => {
      setIsLoading(true);
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
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            if (error.toString().includes("Failed to fetchData")) {
              console.log(error);
            } else {
              console.log("error Fetching data:" + error);
            }
          });
      } catch (error) {
        setIsLoading(false);
        console.error("Error importing handleSubmit:", error);
      }
    };
    handleAPIcalls();
  }, [fetchData]);

  async function setConditionImage(condition, day) {
    let selectedImage;
    switch (condition) {
      case "Sunny":
        selectedImage = await import("./sunny.svg");
        break;
      case "Clear":
        selectedImage = await import("./clear.svg");
        break;
      case "Partly cloudy":
        selectedImage = await import("./partlyCloudy.svg");
        break;
      case "Cloudy":
        selectedImage = await import("./cloudy.svg");
        break;
      case "Overcast":
        selectedImage = await import("./cloudy.svg");
        break;
      case "Mist":
        selectedImage = await import("./mist.svg");

        break;
      case "Patchy rain possible":
        selectedImage = await import("./rain.svg");
        break;
      case "Patchy snow possible":
        selectedImage = await import("./snow.svg");

        break;
      case "Patchy sleet possible":
        selectedImage = await import("./sleet.svg");

        break;
      case "Patchy freezing drizzle possible":
        selectedImage = await import("./drizzle.svg");

        break;
      case "Thundery outbreaks possible":
        selectedImage = await import("./thunder.svg");

        break;
      case "Blowing snow":
        selectedImage = await import("./snow-storm.svg");

        break;
      case "Blizzard":
        selectedImage = await import("./blizzard.svg");

        break;
      case "Fog":
        selectedImage = await import("./fog-night.svg");

        break;
      case "Freezing fog":
        selectedImage = await import("./freezing.svg");

        break;
      case "Patchy light drizzle":
        selectedImage = await import("./drizzle.svg");

        break;
      case "Light drizzle":
        selectedImage = await import("./drizzle.svg");

        break;
      case "Freezing drizzle":
        selectedImage = await import("./freezing.svg");

        break;
      case "Heavy freezing drizzle":
        selectedImage = await import("./freezing.svg");

        break;
      case "Patchy light rain":
        selectedImage = await import("./rain.svg");

        break;
      case "Light rain":
        selectedImage = await import("./rain.svg");

        break;
      case "Moderate rain at times":
        selectedImage = await import("./rain.svg");

        break;
      case "Moderate rain":
        selectedImage = await import("./rain.svg");

        break;
      case "Heavy rain at times":
        selectedImage = await import("./rain.svg");

        break;
      case "Heavy rain":
        selectedImage = await import("./rain.svg");

        break;
      case "Light freezing rain":
        selectedImage = await import("./sleet.svg");

        break;
      case "Moderate or heavy freezing rain":
        selectedImage = await import("./sleet.svg");

        break;
      case "Light sleet":
        selectedImage = await import("./sleet.svg");

        break;
      case "Moderate or heavy sleet":
        selectedImage = await import("./sleet.svg");

        break;
      case "Patchy light snow":
        selectedImage = await import("./snow.svg");

        break;
      case "Light snow":
        selectedImage = await import("./snow.svg");

        break;
      case "Patchy moderate snow":
        selectedImage = await import("./snow.svg");

        break;
      case "Moderate snow":
        selectedImage = await import("./snow.svg");

        break;
      case "Patchy heavy snow":
        selectedImage = await import("./snow-storm.svg");

        break;
      case "Heavy snow":
        selectedImage = await import("./snow-storm.svg");

        break;
      case "Ice pellets":
        selectedImage = await import("./snow-storm.svg");

        break;
      case "Light rain shower":
        selectedImage = await import("./rain.svg");

        break;
      case "Moderate or heavy rain shower":
        selectedImage = await import("./rain.svg");

        break;
      case "Torrential rain shower":
        selectedImage = await import("./rain.svg");

        break;
      case "Light sleet showers":
        selectedImage = await import("./rain.svg");

        break;
      case "Moderate or heavy sleet showers":
        selectedImage = await import("./sleet.svg");

        break;
      case "Light snow showers":
        selectedImage = await import("./snow.svg");

        break;
      case "Moderate or heavy snow showers":
        selectedImage = await import("./snow-storm.svg");

        break;
      case "Light showers of ice pellets":
        selectedImage = await import("./freezing.svg");

        break;
      case "Moderate or heavy showers of ice pellets":
        selectedImage = await import("./freezing.svg");

        break;
      case "Patchy light rain with thunder":
        selectedImage = await import("./thunder.svg");

        break;
      case "Moderate or heavy rain with thunder":
        selectedImage = await import("./thunder.svg");

        break;
      case "Patchy light snow with thunder":
        selectedImage = await import("./thunder.svg");

        break;
      case "Moderate or heavy snow with thunder":
        selectedImage = await import("./snow-storm.svg");

        break;
      default:
        selectedImage = await import("./rainbow.svg");
        break;
    }
    if (day == "current") {
      setConditionImg(selectedImage.default);
    } else if (day == "today") {
      setCon0(selectedImage.default);
    } else if (day == "tommorow") {
      setCon1(selectedImage.default);
    } else {
      setCon2(selectedImage.default);
    }
  }

  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center">
            <a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer">
              <img
              loading="lazy"
                src={ipGeoIcon}
                alt="Weather Logo "
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Weather & IP Geolocation
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tight indent-10">
            <b className="text-2xl">IP</b> Geolocation and Weather APIs are valuable tools for businesses.
              The IP Geolocation API enables businesses to pinpoint the
              geographical location of an IP address, facilitating personalized
              user experiences and targeted marketing. This is particularly
              useful for e-commerce platforms that can display location-specific
              content and enhance security measures. 

              </p>
              <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">O</b>n the other hand, Weather APIs provide real-time and forecasted
              weather data, aiding industries like travel and outdoor events.
              Businesses can offer tailored recommendations based on weather
              conditions, optimize routes, and adjust marketing strategies
              accordingly. Integrating these APIs into your portfolio showcases
              your ability to enhance user engagement, optimize operations, and
              provide data-driven solutions for diverse business needs.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>
          <p className=" mt-3 mx-auto text-justify indent-10">
          <b className="text-2xl">W</b>hen you visit the page, you&apos;ll notice a &quot;Fetch
            Weather&quot; button. Clicking this button automatically retrieves
            weather data for you. Just keep in mind that there might be a slight
            delay due to the two APIs working together. Once the data is
            fetched, you&apos;ll see real-time weather details like temperature,
            wind, and more. As you scroll down, you&apos;ll find a forecast for
            upcoming days. Feel free to toggle between different days to see the
            expected weather conditions. This integration showcases how weather
            data can be displayed on your site, but remember, it&apos;s all for
            demonstration purposes. If there&apos;s a brief delay, that&apos;s
            normal as the APIs do their magic simultaneously.
          </p>
          <button
            name="send"
            className="p-4 m-1 btn whitespace-nowrap mx-auto"
            onClick={() => {
              setFetchData(!fetchData);
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
              "Fetch Weather"
            )}
          </button>
        </div>
        <div className="p-2 w-full">
          {!location ? (
            <>
              <div className="flex h-screen items-center justify-center w-full">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-balBrand dark:border-mainBg border-t-transparent"></div>
              </div>
            </>
          ) : (
            setConditionImage(current.condition.text, "current") && (
              <>
                <div className=" text-dBrand text-2xl break-words rounded-lg overflow-hidden mb-4 bg-lBrand dark:bg-balBrand border-2 border-dBrand dark:border-mainBg animate-scale-100 duration-75">
                  {/* Daily */}
                  {isCurrent ? (
                    <>
                      <div className="p-2 relative mx-auto">
                        <div className="flex flex-wrap mb-4 rounded-lg justify-around mx-auto text-center items-center bg-mainBg dark:bg-lBrand border-2 border-dBrand dark:border-mainBg animate-scale-100 duration-200  ">
                          <div>
                            <h5 className="mb-0 font-medium text-xl">
                              {location.name},{location.country}
                            </h5>
                            <h6 className="mb-0">{location.localtime}</h6>
                          </div>
                          <div>
                            <img
                            loading="lazy" src={conditionImg} alt="Current Condition" />
                            <p className="text-xl">{current.condition.text}</p>
                          </div>
                          <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0">
                              <p>{current.temp_c}&deg;C</p>
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap place-content-center justify-around items-center text-dBrand">
                          {/* divs */}
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.wind_kph}
                                <small className="text-sm whitespace-nowrap">
                                  <sup>KM/H</sup>
                                </small>
                              </p>
                              <p className="text-xs">Wind</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.wind_dir}
                              </p>
                              <p className="text-xs">Direction</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.precip_mm}
                                <sup>mm</sup>
                              </p>
                              <p className="text-xs">Precipitation</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.humidity}
                                <sup>%</sup>
                              </p>
                              <p className="text-xs">Humidity</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100">
                            <div className=" aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.cloud}
                                <sup>%</sup>
                              </p>
                              <p className="text-xs">Clouds</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.feelslike_c}&deg;
                              </p>
                              <p className="text-xs">Feels Like</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {current.vis_km}
                                <sup>KM</sup>
                              </p>
                              <p className="text-xs">Visibility</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
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
                    </>
                  ) : (
                    <>
                      <div className="p-2 relative mx-auto">
                        <div className="flex flex-wrap mb-4 rounded-lg justify-around mx-auto text-center items-center bg-mainBg dark:bg-lBrand border-2 border-dBrand dark:border-mainBg animate-scale-100 duration-200  ">
                          <div>
                            <h5 className="mb-0 font-medium text-xl">
                              {location.name},{location.country}
                            </h5>
                            <h6 className="mb-0">{location.localtime}</h6>
                          </div>
                          <div>
                            {
                              <img
                              loading="lazy"
                                src={
                                  index === 0 ? con0 : index === 1 ? con1 : con2
                                }
                                alt="Forecast Condition"
                              />
                            }
                            <p className="text-xl">
                              {forecast.forecastday[index].day.condition.text}
                            </p>
                          </div>
                          <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0">
                              <p>
                                {forecast.forecastday[index].day.avgtemp_c}
                                &deg;C
                              </p>
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-wrap place-content-center justify-around items-center text-dBrand">
                          {/* divs */}
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.maxtemp_c}
                                <small className="text-sm">
                                  <sup>&deg;C</sup>
                                </small>
                              </p>
                              <p className="text-xs">Max Temp</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.mintemp_c}
                                <small className="text-sm">
                                  <sup>&deg;C</sup>
                                </small>
                              </p>
                              <p className="text-xs">Min Temp</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.totalprecip_mm}
                                <sup>mm</sup>
                              </p>
                              <p className="text-xs">Precipitation</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.maxwind_kph}
                                <small>
                                  <sup>KM/H</sup>
                                </small>
                              </p>
                              <p className="text-xs">Max Wind</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100">
                            <div className=" aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.avghumidity}
                                <sup>%</sup>
                              </p>
                              <p className="text-xs">Humidity</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {
                                  forecast.forecastday[index].day
                                    .daily_chance_of_rain
                                }
                                <sup>%</sup>
                              </p>
                              <p className="text-xs">Rain</p>
                            </div>
                          </div>
                          <div className="w-20 h-20 my-2 animate-scale-100 ">
                            <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                              <p className="text-xl font-semibold m-2">
                                {forecast.forecastday[index].day.avgvis_km}
                                <sup>KM</sup>
                              </p>
                              <p className="text-xs">Visibility</p>
                            </div>
                          </div>

                          {/* Astro Forecast */}
                          <div className="flex flex-col w-full">
                            <h3 className="my-1 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
                              Astro Schedule
                            </h3>
                            <div className="flex flex-wrap justify-around items-center text-dBrand">
                              <div className="w-32 h-32 my-2 animate-scale-100 ">
                                <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                                  <p className="text-xl font-semibold whitespace-nowrap m-2">
                                    {forecast.forecastday[index].astro.sunrise}
                                  </p>
                                  <img
                                  loading="lazy"
                                    src={sunrise}
                                    alt="Sunrise Icon"
                                    className="w-16 h-16"
                                  />
                                  <p className="text-xs">Sunrise</p>
                                </div>
                              </div>
                              <div className="w-32 h-32 my-2 animate-scale-100 ">
                                <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                                  <p className="text-xl font-semibold whitespace-nowrap m-2">
                                    {forecast.forecastday[index].astro.sunset}
                                  </p>
                                  <img
                                  loading="lazy"
                                    src={sunset}
                                    alt=" Sunset"
                                    className="w-16 h-16"
                                  />
                                  <p className="text-xs">Sunset</p>
                                </div>
                              </div>

                              <div className="w-32 h-32 my-2 animate-scale-100 ">
                                <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                                  <p className="text-xl font-semibold whitespace-nowrap m-2">
                                    {forecast.forecastday[index].astro.moonrise}
                                  </p>
                                  <img
                                  loading="lazy"
                                    src={moonrise}
                                    alt="Moonrise"
                                    className="w-16 h-16"
                                  />
                                  <p className="text-xs">Moonrise</p>
                                </div>
                              </div>
                              <div className="w-32 h-32 my-2 animate-scale-100 ">
                                <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                                  <p className="text-xl font-semibold whitespace-nowrap m-2">
                                    {forecast.forecastday[index].astro.moonset}
                                  </p>
                                  <img
                                  loading="lazy"
                                    src={moonset}
                                    alt="Moonset"
                                    className="w-16 h-16"
                                  />
                                  <p className="text-xs">Moonset</p>
                                </div>
                              </div>
                              <div className="w-32 h-32 my-2 animate-scale-100 ">
                                <div className="aspect-square bg-mainBg dark:bg-lBrand rounded-lg p-2 flex flex-col items-center border border-dBrand dark:border-mainBg">
                                  <p className="text-sm whitespace-nowrap m-2">
                                    {
                                      forecast.forecastday[index].astro
                                        .moon_phase
                                    }
                                  </p>
                                  <img
                                  loading="lazy"
                                    src={moonphase}
                                    alt="Moonphase"
                                    className="w-16 h-16"
                                  />
                                  <p className="text-xs bottom-0">Moon Phase</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Forecast */}
                  <div className=" mx-2 text-center bg-transparent whitespace-nowrap">
                    <h3 className="my-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
                      Forecast
                    </h3>
                  </div>
                  <div className="p-2 max-md:gap-2 text-center justify-around items-center md:flex">
                    {index === 0 ? (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(3);
                              setIsCurrent(true);
                            }}
                            className=" cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg "
                          >
                            <p>Currently</p>
                            {setConditionImage(
                              current.condition.text,
                              "current"
                            ) && (
                              <img
                              loading="lazy"
                                src={conditionImg}
                                alt="Current Weather Icon"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2">
                              {current.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(0);
                              setIsCurrent(false);
                            }}
                            className="cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg "
                          >
                            <p>{forecast.forecastday[0].date}</p>
                            {setConditionImage(
                              forecast.forecastday[0].day.condition.text,
                              "today"
                            ) && (
                              <img
                              loading="lazy"
                                src={con0}
                                alt="Forecast day 1"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2">
                              {forecast.forecastday[0].day.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    )}
                    {index === 1 ? (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(3);
                              setIsCurrent(true);
                            }}
                            className=" cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg "
                          >
                            <p>Currently</p>
                            {setConditionImage(
                              current.condition.text,
                              "current"
                            ) && (
                              <img
                              loading="lazy"
                                src={conditionImg}
                                alt="Current Weather Icon"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2">
                              {current.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(1);
                              setIsCurrent(false);
                            }}
                            className=" cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg "
                          >
                            <p>{forecast.forecastday[1].date}</p>
                            {setConditionImage(
                              forecast.forecastday[1].day.condition.text,
                              "tommorow"
                            ) && (
                              <img
                              loading="lazy"
                                src={con1}
                                alt="Forecast day 2"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2">
                              {forecast.forecastday[1].day.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    )}
                    {index === 2 ? (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(3);
                              setIsCurrent(true);
                            }}
                            className=" cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg "
                          >
                            <p>Currently</p>
                            {setConditionImage(
                              current.condition.text,
                              "current"
                            ) && (
                              <img
                              loading="lazy"
                                src={conditionImg}
                                alt="Current Weather Icon"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2">
                              {current.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-32 h-auto max-md:mx-auto my-2 animate-scale-100 ">
                          <div
                            onClick={() => {
                              setIndex(2);
                              setIsCurrent(false);
                            }}
                            className="cursor-pointer flex flex-col transform hover:scale-110 duration-500 whitespace-nowrap bg-mainBg dark:bg-lBrand rounded-lg p-2 items-center border border-dBrand dark:border-mainBg"
                          >
                            <p>{forecast.forecastday[2].date}</p>
                            {setConditionImage(
                              forecast.forecastday[2].day.condition.text,
                              "third"
                            ) && (
                              <img
                              loading="lazy"
                                src={con2}
                                alt="Forecast day 3"
                                className="w-20 h-20"
                              />
                            )}
                            <small className="px-2 tracking ">
                              {forecast.forecastday[2].day.condition.text}
                            </small>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>
    </>
  );
}
export default IPGeo;
