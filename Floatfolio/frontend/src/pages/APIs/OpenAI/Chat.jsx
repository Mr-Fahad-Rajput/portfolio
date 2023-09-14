import { useState } from "react";
import chatIcon from "./chatGPT.svg";

function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState({ first: 0, second: 0 });
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
      const response = await handleSubmit(dataBody, "chat", "POST");

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
    setWordCount({ first: 0, second: 0 });
    setResponse(null);
    setDataBody({ message: "", status: "" });
  }
  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg md:mt-20">
            <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
              <img
                src={chatIcon}
                alt="GPT Icon"
                className=" w-64 h-56 hover:scale-110 transform duration-500 rounded-lg"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Chat GPT API
            </h1>
            <p className="  mt-3 mx-auto text-justify tracking-tight indent-10">
              <b className="text-2xl">C</b>hatGPT API is a powerful tool offered
              by OpenAI that allows businesses to integrate a highly advanced
              language model into their websites and applications. It enables
              seamless communication with users by providing natural language
              understanding and generation capabilities. By integrating this
              API, businesses can enhance customer support, automate responses
              to common queries, and even create engaging chatbots for their
              websites. This technology can significantly improve user
              experience and streamline interactions, making it easier for
              customers to get the information they need quickly.
            </p>
            <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">I</b>ntegrating the ChatGPT API can help
              businesses grow by increasing efficiency and customer
              satisfaction. It can handle a wide range of inquiries 24/7,
              reducing response times and ensuring that customers receive timely
              assistance. Additionally, it can assist with lead generation,
              providing valuable information to potential clients and guiding
              them through the sales process. Overall, integrating the ChatGPT
              API empowers businesses to deliver better customer service, save
              time and resources, and ultimately drive growth by improving user
              engagement and support.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className="  mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">U</b>sing the ChatGPT component is
            straightforward. For the &apos;context&apos; input, you have the
            option to provide relevant information or context that you want the
            system to be aware of. This can help set the stage for the
            conversation and provide necessary background information for the
            AI, thereby potentially improving the quality of responses.
          </p>
          <p className=" mx-auto text-justify tracking-tighter indent-10 ">
            <b className="text-2xl">C</b>onversely, the &apos;message&apos;
            input represents the user&apos;s input or query. You should input
            the user&apos;s message here, and the AI will generate a response
            based on that input, taking into account any context you&apos;ve
            provided. In essence, &apos;message&apos; is where you engage with
            the AI, ask questions, or make requests. It&apos;s important to note
            that this API integration is primarily for demonstration purposes,
            and the GPT API has a wide range of applications that can be
            customized to specific requirements.
          </p>
        </div>
        <div className="mb-4 w-full">
          <div className="mt-2 w-full">
            <label className="dark:text-mainBg text-2xl" htmlFor="yourContext">
              Set Context.
            </label>
            <div className="inline-flex float-right underline ">
              {wordCount.first}/800
            </div>
            <textarea
              id="yourContext"
              rows="4"
              className={`inp w-full scrollbar-hide ${
                wordCount.first > 125 ? "h-auto" : "h-[4rem]"
              } `}
              placeholder="Add Background Details (Optional)"
              name="status"
              value={dataBody.status}
              onChange={handleInput}
              maxLength={800}
              onInput={(e) => setWordCount({ first: e.target.value.length })}
            ></textarea>

            <label className="dark:text-mainBg text-2xl" htmlFor="yourMessage">
              Ask a Question!
            </label>
            <div className="inline-flex float-right underline">
              {wordCount.second}/2500
            </div>
            <textarea
              id="yourMessage"
              rows="4"
              className="inp w-full"
              placeholder="Feel free to input your Thoughts or Request here."
              name="message"
              value={dataBody.message}
              onChange={handleInput}
              required
              maxLength={2500}
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
                  Sending...
                </div>
              ) : (
                "Send"
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
                <p className="text-justify   bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand animate-scale-100">
                  {response.botResponse.content}
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default Chat;
