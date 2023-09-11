import { useEffect, useState } from "react";
import chatIcon from "./chatGPT.svg";

function Chat() {
  const [isLoading, setIsLoading] = useState(false);
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
    setResponse(null);
    setIsLoading(true);
    try {
      const handleSubmitModule = await import("../../apiCalls/handleAPI");
      const handleSubmit = handleSubmitModule.default;
      const response = await handleSubmit(dataBody, "chat", "POST");

      if (response.ok) {
        const data = await response.json();
        setResponse(data);
        console.log(data.botResponse.content);
      } else {
        console.error("Server Error:", response);
      }
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };
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
            <p className=" mt-3 mx-auto text-justify tracking-tight indent-10">
              <b className="text-2xl">T</b>he Mailchimp API is a robust and
              versatile tool that empowers businesses to seamlessly integrate
              their applications with Mailchimp&apos;s message marketing and
              automation platform. With the Mailchimp API, developers can create
              custom solutions that enhance marketing campaigns, audience
              engagement, and data management. This API enables businesses to
              automate tasks such as list management, campaign creation, and
              subscriber interactions.
            </p>
            <p className="mx-auto text-justify tracking-tighter indent-10">
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

          <p className=" mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">T</b>o interact with the Mailchimp API,
            follow these simple steps. Begin by entering your message address
            into the designated message input field. You&rsquo;ll notice two
            subscription options available. If you toggle the button to
            &quot;verified&quot;, the system will initiate a verification
            message before finalizing the subscription on the Mailchimp site.
            Conversely, toggling to &quot;unverified&quot; will result in a
            direct subscription without requiring a confirmation message.
          </p>
          <p className=" mx-auto text-justify tracking-tighter indent-10">
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
          {response && (
              <>
              {/* TODO Design Response Messages, Set Context Empty Check */}
                <p className="text-justify bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand">
                  {response.botResponse.content}
                </p>
              </>
            )}
            <label className="dark:text-mainBg text-2xl" htmlFor="yourContext">
              Set Context
            </label>
            <textarea
              id="yourContext"
              rows="4"
              className="inp w-full h-16"
              placeholder="(Optional)"
              name="status"
              value={dataBody.status}
              onChange={handleInput}
              required
            ></textarea>
            <label className="dark:text-mainBg text-2xl" htmlFor="yourMessage">
              Send a Question
            </label>
            <textarea
              id="yourMessage"
              rows="4"
              className="inp w-full"
              placeholder="Comment, Sugestion, Feedback, or Get Quote"
              name="message"
              value={dataBody.message}
              onChange={handleInput}
              required
            ></textarea>
            
          </div>
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
        </div>
      </section>
    </>
  );
}
export default Chat;
