import { useEffect, useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";

import mapIcon from "./maps.svg";
import navigateIcon from "./navigate.svg";
import centerIcon from "./recenter.svg";
import clearIcon from "./clear.svg";
import zoomInIcon from "./zoom-in.svg";
import zoomOutIcon from "./zoom-out.svg";
import satelliteIcon from "./satellite.svg";
import roadMapIcon from "./roadMap.svg";

import Loader from "../../components/Loader";

function Maps() {
  const [center, setCenter] = useState({ lat: 48.8584, lng: 2.2945 });
  const [mapState, setMapState] = useState(/** @type google.maps.Map*/ (null));

  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  /** @type ReactMutableRefObject<HTMLInputElements>*/
  const origin = useRef();
  /** @type ReactMutableRefObject<HTMLInputElements>*/
  const destination = useRef();
  const autocompleteRef = useRef(null);

  const [zoom, setZoom] = useState(15);
  const [mapType, setMapType] = useState("roadmap");
  const [navIsLoading, setNavIsLoading] = useState(false);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setCenter({ lat: lat, lng: lng });
            mapState.panTo({ lat: lat, lng: lng });
          },
          (error) => {
            console.error("Error getting geolocation:", error.message);
            if (error.code === error.PERMISSION_DENIED) {
              console.error("User denied geolocation access.");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              console.error("Location information is unavailable.");
            } else if (error.code === error.TIMEOUT) {
              console.error("The request to get user location timed out.");
            } else {
              console.error("An unknown error occurred:", error);
            }
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    getCurrentLocation();
  }, [mapState]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API,
    libraries: ["places"],
  });
  if (!isLoaded) {
    return <Loader />;
  }

  async function calculateRoute() {
    if (origin.current.value === "" || destination.current.value === "") {
      return;
    }
    setNavIsLoading(true);
    //eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService
      .route({
        origin: origin.current.value,
        destination: destination.current.value,
        //eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .catch((err) => {
        window.alert("No route Found");
        setNavIsLoading(false);
      });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setNavIsLoading(false);
  }

  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    origin.current.value = "";
    destination.current.value = "";
  }

  function getOriginCenter() {
    if (origin.current.value === "") {
      window.alert("Origin Missing");
      return;
    }
    if (autocompleteRef.current) {
      const selectedPlace = autocompleteRef.current.getPlace();

      if (selectedPlace.geometry && selectedPlace.geometry.location) {
        const olat = selectedPlace.geometry.location.lat();
        const olng = selectedPlace.geometry.location.lng();
        mapState.panTo({ lat: olat, lng: olng });
      }
    }
  }

  function handleZoomIn() {
    setZoom((prevZoom) => prevZoom + 1);
  }
  function handleZoomOut() {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 1));
  }

  function switchToRoadmap() {
    setMapType("roadmap");
  }
  function switchToSatellite() {
    setMapType("satellite");
  }

  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-20 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg">
            <a href="https://www.google.com/maps">
              <img
                src={mapIcon}
                alt="Google Maps Ilustration"
                className=" w-64 h-56 hover:scale-110 transform duration-500 p-3"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Google Maps API
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tighter">
              The Google Maps API offers a powerful tool for businesses to
              seamlessly integrate interactive maps and location-based services
              into their websites and applications. With this API, businesses
              can go beyond simple static maps and provide users with dynamic
              and personalized experiences. By embedding interactive maps on
              your website, you can enhance user engagement and provide valuable
              location-based information. This not only improves the user
              experience but also increases the visibility of your business by
              allowing customers to easily find your physical locations, events,
              or services.
              <br />
              <br />
              Moreover, the Google Maps API enables businesses to create custom
              mapping solutions tailored to their unique needs. From displaying
              multiple locations to providing directions, real-time traffic
              updates, and even integrating Street View, the API empowers you to
              deliver a seamless navigation experience. Whether you&rsquo;re a
              restaurant looking to showcase nearby attractions or an e-commerce
              platform wanting to offer accurate delivery estimations, the
              Google Maps API can be leveraged to offer practical value to your
              users. By integrating this robust mapping solution, your business
              can provide a more intuitive and informative interface,
              contributing to increased user satisfaction and driving growth.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>
          <p className=" mt-3 mx-auto text-justify tracking-tighter ">
            This component serves as a dynamic map interface integrated with the
            Google Maps API, showcasing a variety of functionalities. It&rsquo;s
            important to note that the Google Maps API offers a wide array of
            capabilities beyond those presented here.Please bear in mind that
            this guide focuses on core functionalities for demonstration
            purposes. The practical implementation can be expanded to create a
            comprehensive and feature-rich map experience tailored to specific
            use cases. The core features of this component are explained below:
            <br />
            <br />
            &bull;
            <u>
              <b>Navigation:</b>
            </u>
            In the &quot;Navigation&quot; section, you can input both the
            starting and ending points for navigation. Simply enter the desired
            origin and destination locations in the corresponding input fields.
            After inputting the locations, clicking the &quot;Navigate&quot;
            button will calculate the route between them.
            <br />
            &bull;
            <u>
              <b>Origin Button:</b>
            </u>
            The Origin button is designed to recenter the map to the initial
            origin point, allowing you to swiftly return to your starting point
            during navigation. It&rsquo;s worth mentioning that the Origin
            button necessitates valid origin input to operate. If the input
            fields are empty, the Origin button will have no effect.
            <br />
            &bull;
            <u>
              <b>Geolocation:</b>
            </u>
            The component includes geolocation functionality that depends on the
            user granting permission upon site loading. With geolocation
            permission granted, you can make use of features such as centering
            the map on your current location. If permission is declined, the
            geolocation features will not be accessible. However, you can test
            these functionalities in an incognito browser session, where you can
            grant or deny permissions as required.
          </p>
        </div>
        <div className="bg-lBrand rounded-lg m-2 md:grid md:grid-flow-row w-full p-2">
          <div className="md:flex flex-row justify-center">
            <div className="md:flex flex-row">
              <label
                className=" text-dBrand m-auto text-lg font-semibold"
                htmlFor="Origin"
              >
                Origin:
              </label>
              <Autocomplete
                onLoad={(autocomplete) =>
                  (autocompleteRef.current = autocomplete)
                }
              >
                <input
                  type="text"
                  id="Origin"
                  className="inp max-md:w-full"
                  placeholder="Orgin"
                  ref={origin}
                />
              </Autocomplete>
            </div>
            <div className="md:flex flex-row">
              <label
                className="m-auto text-lg font-semibold text-dBrand"
                htmlFor="Destination"
              >
                Destination:
              </label>
              <Autocomplete>
                <input
                  type="text"
                  id="Destination"
                  className="inp max-md:w-full"
                  placeholder="Destination"
                  ref={destination}
                />
              </Autocomplete>
            </div>
            <div className="btn flex flex-row">
              <button
                onClick={() => {
                  calculateRoute();
                }}
                className="mx-auto text-lg font-semibold"
                aria-label="Calculate Distance"
              >
                {navIsLoading ? (
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
                    Navigating...
                  </div>
                ) : (
                  "Navigate"
                )}
              </button>
              {navIsLoading ? (
                <p className="h-12"></p>
              ) : (
                <img src={navigateIcon} alt="Navigate" className="h-12 w-12" />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-evenly w-full m-2">
            <div className="flex flex-row w-5/12">
              <h4 className=" m-auto text-lg font-semibold text-dBrand">
                Distance:
              </h4>
              <span className=" m-auto text-center border-b-2 text-dBrand border-dBrand w-full text-2xl font-semibold">
                {distance}
              </span>
            </div>
            <div className="flex flex-row w-5/12">
              <h4 className=" m-auto text-lg font-semibold text-dBrand">
                Duration:
              </h4>
              <span className=" m-auto text-center border-b-2  text-dBrand border-dBrand w-full text-2xl font-semibold">
                {duration}
              </span>
            </div>
          </div>
          <div className="m-auto w-full bg-mainBg rounded-lg text-dBrand flex flex-row justify-evenly">
            <div className="">
              <div className="flex flex-row">
                <img
                  src={zoomInIcon}
                  alt="Zoom In Button"
                  className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer"
                  onClick={handleZoomIn}
                />
                <img
                  src={zoomOutIcon}
                  alt="Zoom Out Button"
                  className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer"
                  onClick={handleZoomOut}
                />
              </div>
              <h4 className=" m-auto text-center text-xs font-semibold text-dBrand">
                Zoom
              </h4>
            </div>
            <div>
              <img
                src={centerIcon}
                alt="recenter button"
                className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer"
                onClick={() => {
                  getOriginCenter();
                }}
              />
              <h4 className=" m-auto text-center text-xs font-semibold text-dBrand">
                Origin
              </h4>
            </div>
            <div>
              <img
                src={clearIcon}
                alt="Clear Route button"
                className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer"
                onClick={() => {
                  clearRoute();
                }}
              />
              <h4 className=" m-auto text-center text-xs font-semibold text-dBrand">
                Clear Route
              </h4>
            </div>
            <div className="">
              <div className="flex flex-row">
                <img
                  src={satelliteIcon}
                  alt="Satellite button"
                  className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer p-2"
                  onClick={switchToSatellite}
                />
                <img
                  src={roadMapIcon}
                  alt="roadmap button"
                  className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer p-2"
                  onClick={switchToRoadmap}
                />
              </div>
              <h4 className=" m-auto text-center text-xs font-semibold text-dBrand">
                Map Type
              </h4>
            </div>
          </div>
        </div>
        <div className=" bg-secondaryBg dark:bg-balBrand rounded-lg m-2 p-2 w-full h-[80vh]">
          <GoogleMap
            center={center}
            zoom={zoom}
            mapTypeId={mapType}
            options={{
              zoomControl: false,
              mapTypeControl: false,
            }}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMapState(map)}
          >
            <Marker position={center} />
            {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )}
          </GoogleMap>
        </div>
      </section>
    </>
  );
}
export default Maps;
