import { useState } from "react";
import dalleIcon from "./dalle.svg";

function Dalle() {
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState({ second: 0 });
  const [response, setResponse] = useState(null);
  const [dataBody, setDataBody] = useState({
    message: "",
    status: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDataBody((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAPIcalls = async () => {
    if (dataBody.status.trim() === "") {
      setDataBody.status = "Be short, simple, and precise.";
    }
    if (dataBody.message.trim() === "") {
      setDataBody({ message: "Sorry! This Can't be Empty." });
      return;
    }
    setResponse(null);
    setIsLoading(true);
    try {
      const handleSubmitModule = await import("../../apiCalls/handleAPI");
      const handleSubmit = handleSubmitModule.default;
      const response = await handleSubmit(dataBody, "Dalle", "POST");

      if (response.ok) {
        const data = await response.json();
        setResponse(data);
      } else {
        console.error("Server Error:", response);
      }
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };
  function clearInput() {
    setWordCount({ second: 0 });
    setResponse(null);
    setDataBody({ message: "", status: "" });
  }
  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg md:mt-10">
            <a
              href="https://openai.com/dall-e-2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                src={dalleIcon}
                alt="Dalle Icon"
                className=" w-64 h-56 hover:scale-110 transform duration-500 rounded-lg"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Dalle 2 API
            </h1>
            <p className="  mt-3 mx-auto text-justify tracking-tight indent-10">
              <b className="text-2xl">D</b>ALL·E API, powered by OpenAI,
              revolutionizes image generation by transforming textual
              descriptions into stunning visuals. It&apos;s a game-changer for
              content creators, simplifying the process of generating images
              that align with written content. Businesses can now effortlessly
              enhance their visual storytelling, from marketing campaigns to
              website design, thanks to DALL·E&apos;s creative image synthesis
              capabilities.
            </p>
            <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">B</b>y integrating the DALL·E API,
              developers can save valuable time and resources, as it automates
              the image creation process. This not only streamlines content
              production but also captivates users with visually engaging
              experiences. DALL·E API empowers businesses to stand out in the
              digital landscape by delivering dynamic and compelling visual
              content.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className="  mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">T</b>o use DALL·E2 API, follow these simple
            steps. In the prompt section below, enter a clear and descriptive
            text prompt that outlines what you want the generated image to
            depict. Keep in mind that the generated image will be in 1024x1024
            resolution, and complex images may take up to a minute to generate.
            To achieve better results, provide specific and detailed prompts,
            including relevant keywords and context. The more precise your
            instructions, the more likely DALL·E2 will generate an image that
            aligns with your vision. Experiment with different prompts to
            fine-tune your creative output and make the most of this powerful
            image generation tool.
            <br />
            <b className="text-2xl">Example Prompt</b>
          </p>
          <p className=" mx-auto text-justify tracking-tighter indent-10 ">
            <b className="text-2xl">&quot;G</b>enerate an image of a surreal
            cityscape at sunset, with towering buildings that resemble ancient
            trees, glowing with bioluminescent lights. The city should be
            surrounded by a shimmering, ethereal river, and a lone boatman
            should be rowing on its tranquil waters.&quot;
          </p>
        </div>
        <div className="mb-4 w-full">
          <div className="mt-2 w-full">
            <label className="dark:text-mainBg text-2xl" htmlFor="yourMessage">
              Enter Prompt!
            </label>
            <div className="inline-flex float-right underline">
              {wordCount.second}/400
            </div>
            <textarea
              id="yourMessage"
              rows="4"
              className="inp w-full"
              placeholder="Feel free to input your Imagination here."
              name="message"
              value={dataBody.message}
              onChange={handleInput}
              required
              maxLength={400}
              onInput={(e) => setWordCount({ second: e.target.value.length })}
            ></textarea>
          </div>
          <div className="flex">
            <button
              name="send"
              className="p-4 m-1 btn whitespace-nowrap mx-auto"
              onClick={() => {
                handleAPIcalls();
              }}
              disabled={isLoading}
              aria-label="Proceed Button"
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
                  Generating...
                </div>
              ) : (
                "Generate"
              )}
            </button>
            {response && (
              <button
                className="p-4 m-1 btn whitespace-nowrap mx-auto"
                onClick={clearInput}
              >
                Clear
              </button>
            )}
          </div>
          {response && (
            <>
              <div className="inline-flex flex-col w-full">
                <h4 className="dark:text-mainBg text-2xl inline-flex max-w-min right-0 mx-auto ">
                  Response
                </h4>
                <img
                  src={response.image.data[0].url}
                  alt=" AI generated Image"
                  className="m-2 rounded-lg border-2 border-dBrand dark:border-mainBg md:w-1/2 mx-auto"
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default Dalle;
