import { useEffect, useRef, useState } from "react";

import mapIcon from "./maps.svg";
import navigateIcon from "./navigate.svg";
import centerIcon from "./recenter.svg";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Loader from "../components/Loader";
var center = { lat: 48.8584, lng: 2.2945 };

function Stripe() {
  const [mapState, setMapState] = useState(/** @type google.maps.Map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  /** @type ReactMutableRefObject<HTMLInputElements>*/
  const origin = useRef();
  /** @type ReactMutableRefObject<HTMLInputElements>*/
  const destination = useRef();
  const autocompleteRef = useRef(null);

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
    //eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: origin.current.value,
      destination: destination.current.value,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    console.log(duration, distance);
  }
  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    origin.current.value = "";
    destination.current.value = "";
  }
  function getOriginCenter() {
    if (autocompleteRef.current) {
      const selectedPlace = autocompleteRef.current.getPlace();

      if (selectedPlace.geometry && selectedPlace.geometry.location) {
        const olat = selectedPlace.geometry.location.lat();
        const olng = selectedPlace.geometry.location.lng();
        center = { lat: olat, lng: olng };

        console.log("Latitude:", olat);
        console.log("Longitude:", olng);
      }
    }
  }
  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 md:my-20 h-full md:float-left place-items-center">
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
            <p className=" mt-3 mx-auto text-justify tracking-tight">
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
            How To
          </h3>
          <p className=" mt-3 mx-auto text-justify">
            {" "}
            To interact with the Mailchimp API, follow these simple steps. Begin
            by entering your email address into the designated email input
            field. You&rsquo;ll notice two subscription options available. If
            you toggle the button to &quot;verified&quot;, the system will
            initiate a verification email before finalizing the subscription on
            the Mailchimp site. Conversely, toggling to &quot;unverified&quot;
            will result in a direct subscription without requiring a
            confirmation email.
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
              <Autocomplete onLoad={autocomplete => (autocompleteRef.current = autocomplete)}>
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
                Navigate
              </button>
              <img src={navigateIcon} alt="Navigate" className="h-12 w-12" />
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
            <div className="m-auto bg-lBrand dark:hover:bg-lBrand text-dBrand">
              <img
                src={centerIcon}
                alt="recenter button"
                className="h-14 w-14 hover:scale-125 transform duration-500 cursor-pointer"
                onClick={() => {
                  getOriginCenter();
                  mapState.panTo(center);
                }}
              />
            </div>
        </div>
        <div className=" bg-secondaryBg dark:bg-balBrand rounded-lg m-2 p-2 w-full h-[80vh]">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMapState(map)}
          >
            <Marker position={origin} />
            {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )}
          </GoogleMap>
        </div>
      </section>
    </>
  );
}
export default Stripe;
