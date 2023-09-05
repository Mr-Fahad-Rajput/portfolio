import { useState } from "react";

import visionIcon from "./cloudVision.svg";

function CloudVision() {
  const [imageFile, setImageFile] = useState(null);
  const [results, setResults] = useState(null);
  const [index, setIndex] = useState(0);

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
    setIndex(0);
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
            setResults(data);
          } else if (featureData.feature == "LANDMARK_DETECTION") {
            setResponseStatus({
              status: true,
              text: "LANDMARK_DETECTION",
            });
            setResults(data);
          } else if (featureData.feature == "WEB_DETECTION") {
            setResponseStatus({
              status: true,
              text: "WEB_DETECTION",
            });
            setResults(data);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
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
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2 ">
          <div className="inline-flex w-64 h-full md:float-left place-items-center mt-20 rounded-lg m-2 dark:bg-mainBg">
            <a
              href="https://cloud.google.com/vision"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={visionIcon}
                alt="Google Vision Ilustration"
                className=" w-64 h-56 hover:scale-110 transform duration-500"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Google Cloud Vision
            </h1>
            <p className=" mt-3 mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">G</b>oogle Vision API is a powerful tool
              that harnesses the capabilities of computer vision technology to
              analyze and understand thindent-1e content of images and videos.
              I&apos;ve integrated this advance API into websites to provide
              businesses with a wide range of benefits. One of the key
              advantages is its ability to enhance user experience by
              automatically recognizing and tagging images, making content more
              accessible and user-friendly. For instance, businesses can use it
              to categorize product images, helping customers easily find what
              they&apos;re looking for on an e-commerce site.
            </p>
            <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">A</b>dditionally, Google Vision API can be
              employed for security purposes, such as detecting inappropriate
              content in user-generated uploads or verifying the authenticity of
              documents through optical character recognition (OCR). It also
              opens the door to creative applications like generating image
              captions or even creating interactive experiences where users can
              search for visually similar images. By integrating Google Vision
              API into their websites, businesses can stay ahead in the digital
              landscape, improving user engagement, content organization, and
              security while unleashing new possibilities for innovation.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className=" mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">T</b>his component seamlessly integrates the
            Google Vision API, offering a range of powerful features for image
            analysis. To use this component, simply select a feature from the
            dropdown menu, upload an image of your choice, and click &quot;Analyze&quot;.
            It&apos;s important to note that this guide will primarily highlight the
            core functionalities for demonstration purposes, while the practical
            implementation can be further customized to suit specific use cases.
            <br />
            <b className="text-2xl">Features:</b>
            <br />
            &bull;
            <u>
              <b>Text Detection:</b>
            </u>
            With the &quot;Text Detection&quot; feature, you can easily extract text from
            images, whether it&apos;s printed or handwritten. 
            <br />
            &bull;
            <u>
              <b>Document Text Detection:</b>
            </u>
            The &quot;Document Text Detection&quot; feature excels at extracting text and
            structure from dense text documents, making it perfect for scanned
            materials or text-heavy content.
            <br />
            &bull;
            <u>
              <b>Safe Search Detection:</b>
            </u>
            Ensure the safety of your images with the &quot;Safe Search Detection&quot;
            feature, which evaluates images for adult content, violence, and
            unsafe elements.
            <br />
            &bull;
            <u>
              <b>Image Properties:</b>
            </u>
            The &quot;Image Properties&quot; feature analyzes dominant colors and color
            information in images, ideal for fashion or design-related content
            where color details matter.
            <br />
            &bull;
            <u>
              <b>Logo Detection:</b>
            </u>
            Identify well-known logos within images using the &quot;Logo Detection&quot;
            feature, making it great for branding recognition.
            <br />
            &bull;
            <u>
              <b>Landmark Detection:</b>
            </u>
            The &quot;Landmark Detection&quot; feature identifies famous landmarks in
            photos and provides related information, particularly useful for
            travel photos featuring recognizable landmarks.
            <br />
            &bull;
            <u>
              <b>Web Detection:</b>
            </u>
            With the &quot;Web Detection&quot; feature, you can search the web for similar
            images and associated web pages, helping you identify image sources
            or find visually similar content online. <br/><br/>
            <b className="text-2xl">Supported Image Formats:</b>
              
            </p>
            <p className="mx-auto text-justify tracking-tighter indent-10">
            <b className="text-2xl">G</b>oogle Vision API supports various image formats, including
            JPEG, PNG, GIF, BMP, WEBP, RAW, ICO, PDF, and TIFF. Please note that
            some formats may affect result accuracy, so it&apos;s recommended to use
            images with a minimum resolution of 640 x 480 pixels for optimal
            results. 
          </p>
        </div>
        <div className="w-auto mt-4 bg-lBrand dark:bg-balBrand p-2 rounded-lg border-dBrand border-2 dark:border-mainBg max-md:max-w-full">
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

              {(responseStatus.text == "TEXT_DETECTION" ||
                responseStatus.text == "DOCUMENT_TEXT_DETECTION") && (
                <>
                  {results[index] && results[index].locale && (
                    <h6 className="capitalize">
                      Detected Language:
                      {displayNames.of(results[index].locale)}
                    </h6>
                  )}
                  {(results[index] || results.text) && (
                    <p className=" text-justify bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand">
                      {results[index]
                        ? results[index].description
                        : results.text}
                    </p>
                  )}
                </>
              )}
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
                      Color:{index + 1}/{results.dominantColors.colors.length}
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
                    </p>
                  </div>
                </>
              )}
              {(responseStatus.text == "LOGO_DETECTION" ||
                responseStatus.text == "LANDMARK_DETECTION") && (
                <>
                  <div className="p-2 rounded-lg border-2 border-dBrand max-w-max bg-mainBg mx-auto">
                    {results[index] && results[index].description ? (
                      <>
                        <p className="text-sm text-dBrand">
                          Result:{index + 1}/{results.length}
                        </p>
                        <h6 className="text-2xl text-dBrand capitalize">
                          <small>Name:</small>
                          {results[index].description}
                        </h6>
                      </>
                    ) : (
                      <h6 className="text-2xl text-dBrand">Unidentified</h6>
                    )}
                  </div>
                </>
              )}
              {responseStatus.text == "WEB_DETECTION" && (
                <>
                  <div className="p-2 rounded-lg border-2 border-dBrand max-w-max bg-mainBg mx-auto">
                    {results.bestGuessLabels && results.bestGuessLabels[0] && (
                      <>
                        <h6 className="text-2xl text-dBrand capitalize">
                          {results.bestGuessLabels[0].label}
                        </h6>
                      </>
                    )}
                    {results.fullMatchingImages[index] && (
                      <div className="bg-lBrand border-dBrand rounded-lg border-2 p-2 my-2">
                        <h6 className="mb-2 font-semibold underline cursor-default text-balBrand border-y-2 border-dBrand text-center">
                          Matching Images
                        </h6>
                        <p className="text-sm text-dBrand hover:underline md:hover:text-base duration-500 overflow-hidden">
                          <a
                            href={results.fullMatchingImages[index].url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {results.fullMatchingImages[index].url}
                          </a>
                        </p>
                        <sup className="font-bold text-base">
                          {index + 1}/{results.fullMatchingImages.length}
                        </sup>
                      </div>
                    )}
                    {results.pagesWithMatchingImages[index] && (
                      <div className="bg-lBrand border-dBrand rounded-lg border-2 p-2 my-2">
                        <h6 className="mb-2 font-semibold underline cursor-default text-balBrand border-y-2 border-dBrand text-center">
                          Web Pages Containing Similar Images
                        </h6>
                        <small className="inline underline text-lg font-bold text-dBrand">
                          Page-Title:
                        </small>
                        <div
                          className="inline text-dBrand cursor-default capitalize"
                          dangerouslySetInnerHTML={{
                            __html:
                              results.pagesWithMatchingImages[index].pageTitle,
                          }}
                        ></div>
                        <p className="text-sm text-dBrand hover:underline md:hover:text-base duration-500 overflow-hidden">
                          <a
                            href={results.pagesWithMatchingImages[index].url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {results.pagesWithMatchingImages[index].url}
                          </a>
                          <br />
                        </p>
                        <sup className="font-bold text-base">
                          {index + 1}/{results.pagesWithMatchingImages.length}
                        </sup>
                      </div>
                    )}
                  </div>
                </>
              )}

              {(responseStatus.text == "IMAGE_PROPERTIES" ||
                responseStatus.text == "LOGO_DETECTION" ||
                responseStatus.text == "WEB_DETECTION" ||
                responseStatus.text == "LANDMARK_DETECTION") && (
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
                      if (responseStatus.text == "IMAGE_PROPERTIES") {
                        if (index < results.dominantColors.colors.length - 1) {
                          setIndex(index + 1);
                        }
                      } else if (
                        responseStatus.text == "LOGO_DETECTION" ||
                        responseStatus.text == "LANDMARK_DETECTION"
                      ) {
                        if (index < results.length - 1) {
                          setIndex(index + 1);
                        }
                      } else {
                        if (
                          index <
                          Math.max(
                            results.bestGuessLabels.length,
                            results.fullMatchingImages.length,
                            results.pagesWithMatchingImages.length
                          ) -
                            1
                        ) {
                          setIndex(index + 1);
                        }
                      }
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
