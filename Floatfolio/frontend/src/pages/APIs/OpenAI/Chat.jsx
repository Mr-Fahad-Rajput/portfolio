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
          <div className=" inline-flex w-64 md:my-12 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg">
            <a href="https://mailchimp.com/" target="_blank" rel="noreferrer">
              <img
                src={chatIcon}
                alt="GPT Icon"
                className=" w-64 h-56 hover:scale-110 transform duration-500 rounded-lg"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Mail Chimp API
            </h1>
            <p className=" leading-relaxed mt-3 mx-auto text-justify tracking-tight indent-10">
              <b className="text-2xl">T</b>he Mailchimp API is a robust and
              versatile tool that empowers businesses to seamlessly integrate
              their applications with Mailchimp&apos;s message marketing and
              automation platform. With the Mailchimp API, developers can create
              custom solutions that enhance marketing campaigns, audience
              engagement, and data management. This API enables businesses to
              automate tasks such as list management, campaign creation, and
              subscriber interactions.
            </p>
            <p className="leading-relaxed mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">B</b>y leveraging the Mailchimp API,
              businesses can unlock the full potential of message marketing,
              streamline their communication efforts, and provide a more
              personalized experience to their audience. Whether it&apos;s
              syncing customer data, automating message sends, or tracking
              campaign performance, the Mailchimp API offers a powerful way to
              integrate message marketing functionalities into a wide range of
              applications and platforms. For More details about the Power of
              Mail Chimp, Click on the logo to The left.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className=" leading-relaxed mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">T</b>o interact with the Mailchimp API,
            follow these simple steps. Begin by entering your message address
            into the designated message input field. You&rsquo;ll notice two
            subscription options available. If you toggle the button to
            &quot;verified&quot;, the system will initiate a verification
            message before finalizing the subscription on the Mailchimp site.
            Conversely, toggling to &quot;unverified&quot; will result in a
            direct subscription without requiring a confirmation message.
          </p>
          <p className=" mx-auto text-justify tracking-tighter indent-10 leading-relaxed">
            <b className="text-2xl">P</b>lease note that this entire process is
            designed solely for API demonstration purposes. When you input your
            message, it will be registered for the newsletter; however, please
            be aware that no promotional messages will be sent. This lack of
            promotional messages is intentional and designed for clear reasons.
            Feel free to explore the functionality of the Mailchimp API in this
            controlled setting.
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
                <p className="text-justify leading-relaxed  bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand animate-scale-100">
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
