import { useEffect, useState } from "react";

import visionIcon from "./cloudVision.svg";
import sent from "../../../assets/sent.svg";
import notSent from "../../../assets/notsent.svg";

import AlertBox from "../../components/AlertBox";

function CloudVision() {
  const [imageFile, setImageFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [index, setIndex] = useState(0);

  const [alertImg, setAlertImg] = useState(sent);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });
  const [dataBody, setDataBody] = useState({
    feature: "TEXT_DETECTION",
  });
  const displayNames = new Intl.DisplayNames(["en"], { type: "language" });
  const confidenceMap = {
    UNKNOWN: { text: "Unknown", percentage: "0%", color: "" },
    VERY_UNLIKELY: {
      text: "Very Unlikely",
      percentage: "10%",
      color: "#44beee",
    },
    UNLIKELY: { text: "Unlikely", percentage: "30%", color: "#1aeaa8" },
    POSSIBLE: { text: "Possible", percentage: "60%", color: "#eaea1a" },
    LIKELY: { text: "Likely", percentage: "80%", color: "#ee8e44" },
    VERY_LIKELY: { text: "Very Likely", percentage: "100%", color: "#ee4d44" },
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setResults(null);
  };
  const handleInput = (e) => {
    const text = e.target.value;
    setDataBody({ ...dataBody, feature: text });
  };

  // Backend Implementation
  const handleAPIcalls = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("text", JSON.stringify(dataBody));

      const handleSubmitModule = await import(
        "../../apiCalls/handleImageUpload"
      );
      const handleImageUpload = handleSubmitModule.default;
      handleImageUpload(formData)
        .then((res) => {
          if (res.responseObject) {
            res = res.responseObject;
            return res;
          } else {
            throw new Error("Request failed with status: " + res);
          }
        })
        .then((data) => {
          console.log(data);
          const featureData = JSON.parse(formData.get("text"));
          if (featureData.feature == "TEXT_DETECTION") {
            setResponseStatus({
              status: true,
              text: "TEXT_DETECTION",
            });
            setResults(data);
          } else if (featureData.feature == "DOCUMENT_TEXT_DETECTION") {
            setResponseStatus({
              status: true,
              text: "DOCUMENT_TEXT_DETECTION",
            });
            setResults(data);
          } else if (featureData.feature == "SAFE_SEARCH_DETECTION") {
            setResponseStatus({
              status: true,
              text: "SAFE_SEARCH_DETECTION",
            });
            setResults(data);
          } else if (featureData.feature == "IMAGE_PROPERTIES") {
            setResponseStatus({
              status: true,
              text: "IMAGE_PROPERTIES",
            });
            setResults(data);
          } else if (featureData.feature == "LOGO_DETECTION") {
            setResponseStatus({
              status: true,
              text: "LOGO_DETECTION",
            });
          } else if (featureData.feature == "LANDMARK_DETECTION") {
            setResponseStatus({
              status: true,
              text: "LANDMARK_DETECTION",
            });
          } else if (featureData.feature == "WEB_DETECTION") {
            setResponseStatus({
              status: true,
              text: "WEB_DETECTION",
            });
          } else if (featureData.feature == "LABEL_DETECTION") {
            setResponseStatus({
              status: true,
              text: "LABEL_DETECTION",
            });
          }
        })
        .catch((error) => {
          console.log(error.toString());
          setAlertImg(notSent);
          if (error.toString().includes("Failed to fetch")) {
            setResponseStatus({
              status: true,
              text: "Can't Connect To the Server! Check Your Internet Connection",
            });
          } else {
            console.log(error);
          }
        })
        .finally(() => {
          setIsLoading(false);
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
            <a href="https://CloudVision.com/">
              <img
                src={visionIcon}
                alt="Google Vision Ilustration"
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Mail Chimp API
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tight">
              The CloudVision API is a robust and versatile tool that empowers
              businesses to seamlessly integrate their applications with
              CloudVision&apos;s feature marketing and automation platform. With
              the CloudVision API, developers can create custom solutions that
              enhance marketing campaigns, audience engagement, and data
              management. This API enables businesses to automate tasks such as
              list management, campaign creation, and subscriber interactions.{" "}
              <br />
              <br />
              By leveraging the CloudVision API, businesses can unlock the full
              potential of feature marketing, streamline their communication
              efforts, and provide a more personalized experience to their
              audience. Whether it&apos;s syncing customer data, automating
              feature sends, or tracking campaign performance, the CloudVision
              API offers a powerful way to integrate feature marketing
              functionalities into a wide range of applications and platforms.
              For More details about the Power of Mail Chimp, Click on the logo
              to The left.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className=" mt-3 mx-auto text-justify">test</p>
        </div>
        <div className="w-auto bg-lBrand dark:bg-balBrand p-2 rounded-lg border-dBrand border-2 dark:border-mainBg">
          <h4 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand text-center">
            API Controls
          </h4>
          <label htmlFor="features" className="dark:text-mainBg ">
            Features:
          </label>
          <select
            id="features"
            className="inp w-full mx-auto dark:border-dBrand"
            onChange={handleInput}
          >
            <option value="TEXT_DETECTION">Text Detection</option>
            <option value="DOCUMENT_TEXT_DETECTION">
              Document Text Detection
            </option>
            <option value="SAFE_SEARCH_DETECTION">Safe Search</option>
            <option value="IMAGE_PROPERTIES">
              Image Properties(Color Schemes)
            </option>
            <option value="LOGO_DETECTION">Logo Detection</option>
            <option value="LANDMARK_DETECTION">Landmark Detection</option>
            <option value="WEB_DETECTION">Web Detection</option>
            <option value="LABEL_DETECTION">Label Detection</option>
          </select>

          <label className="dark:text-mainBg" htmlFor="img_input">
            Upload Image:
          </label>
          <div>
            <input
              type="file"
              id="img_input"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="img_input"
              className={`btn whitespace-nowrap m-auto p-4 ${
                imageFile ? " " : "w-full"
              }`}
            >
              Choose File
            </label>
            {imageFile && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Selected File"
                  className="w-auto h-auto mx-auto rounded-lg border-dBrand border-2 dark:border-mainBg"
                />
                <figcaption className="underline">{imageFile.name}</figcaption>
              </div>
            )}
          </div>

          <button
            name="send"
            className="p-4 m-1 btn whitespace-nowrap mx-auto mt-4"
            onClick={handleAPIcalls}
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
                  {/* TODO response Handeling For Each Feature */}
                </div>
                Analyzing...
              </div>
            ) : (
              "Analyze"
            )}
          </button>
          {results && (
            <div className="text-center h-auto m-auto">
              <h4 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand text-center">
                Results
              </h4>

              {results[index] && results[index].locale && (
                <h6>
                  Detected Language: {displayNames.of(results[index].locale)}
                </h6>
              )}
              {(results[index] || results.text) && (
                <p className=" text-justify bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand">
                  {results[index] ? results[index].description : results.text}
                </p>
              )}
              {/* TODO safesearch visibility */}
              {responseStatus.text == "SAFE_SEARCH_DETECTION" && (
                <>
                  <div className="m-2 my-4">
                    <h5>Adult:{confidenceMap[results.adult].text}</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-dBrand">
                      <div
                        className=" h-2.5 rounded-full"
                        style={{
                          width: confidenceMap[results.adult].percentage,
                          background: confidenceMap[results.adult].color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="m-2 my-4">
                    <h5>Spoof:{confidenceMap[results.spoof].text}</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-dBrand">
                      <div
                        className=" h-2.5 rounded-full"
                        style={{
                          width: confidenceMap[results.spoof].percentage,
                          background: confidenceMap[results.spoof].color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="m-2 my-4">
                    <h5>Medical:{confidenceMap[results.medical].text}</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-dBrand">
                      <div
                        className=" h-2.5 rounded-full"
                        style={{
                          width: confidenceMap[results.medical].percentage,
                          background: confidenceMap[results.medical].color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="m-2 my-4">
                    <h5>Violence:{confidenceMap[results.violence].text}</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-dBrand">
                      <div
                        className=" h-2.5 rounded-full"
                        style={{
                          width: confidenceMap[results.violence].percentage,
                          background: confidenceMap[results.violence].color,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="m-2 my-4">
                    <h5>Racy:{confidenceMap[results.racy].text}</h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-dBrand">
                      <div
                        className=" h-2.5 rounded-full"
                        style={{
                          width: confidenceMap[results.racy].percentage,
                          background: confidenceMap[results.racy].color,
                        }}
                      ></div>
                    </div>
                  </div>
                </>
              )}
              {responseStatus.text == "IMAGE_PROPERTIES" && (
                <>
                  <div className="p-2 rounded-lg border-2 border-dBrand max-w-max bg-mainBg mx-auto">
                  <p className="text-sm text-dBrand">
                    Color:{index+1}/{results.dominantColors.colors.length}
                  </p>
                    <div
                    className="h-32 w-32 aspect-square m-2 rounded-lg border-2 border-dBrand mx-auto"
                    style={{
                      background: `rgb(${results.dominantColors.colors[index].color.red}, ${results.dominantColors.colors[index].color.green}, ${results.dominantColors.colors[index].color.blue})`,
                    }}
                  ></div>
                  <p className="text-2xl text-dBrand py-4">
                    RGB:({results.dominantColors.colors[index].color.red} ,
                    {results.dominantColors.colors[index].color.green} ,
                    {results.dominantColors.colors[index].color.blue})
                  </p></div>
                </>
              )}
                {responseStatus.text == "IMAGE_PROPERTIES" && (
                  <div className="flex flex-row justify-center gap-4">
                    <button
                      className="btn p-4"
                      onClick={() => {
                        if (index > 0) setIndex(index - 1);
                      }}
                    >
                      Prev
                    </button>
                    <button
                      className="btn p-4"
                      onClick={() => {
                        if (index < results.dominantColors.colors.length - 1)
                          setIndex(index + 1);
                      }}
                    >
                      Next
                    </button>
                  </div>
                )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default CloudVision;
