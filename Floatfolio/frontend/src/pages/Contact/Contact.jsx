import { useEffect, useState } from "react";
import conIcon from "./contact.svg";
import gitIcon from "./github.svg";
import linkedIcon from "./linkedin.svg";
import waIcon from "./whatsapp.svg";
import gmailIcon from "./gmail.svg";
import tel from "./tel.svg";
import sent from "./sent.svg";
import notSent from "./notsent.svg";
import AlertBox from "../components/AlertBox";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });

  const [msgImg, setMsgImg] = useState(sent);
  const [errStatus, setErrStatus] = useState(false);

  useEffect(() => {
    setMsgImg(errStatus ? notSent : sent);
  }, [errStatus]);

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  // Handle Submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const handleSubmitModule = await import("../apiCalls/handleSubmit.js");
      const handleSubmit = handleSubmitModule.default;
      handleSubmit(
        event,
        msg,
        "msg",
        setErrStatus,
        setResponseStatus,
        setIsLoading
      );
    } catch (error) {
      console.error("Error importing handleSubmit:", error);
    }
  };

  return (
    <>
      <section className="mainContent">
        {/* Description Div */}
        <div className="  h-1/5 rounded-lg m-2 bg-secondaryBg dark:bg-balBrand md:px-5 text-xl overflow-hidden  text-dBrand dark:text-mainBg ">
          <div className="text-center">
            <div className="inline-flex w-64 md:float-left">
              <img
                loading="lazy"
                src={conIcon}
                alt="Contact Ilustration"
                className=" w-64 h-56"
              />
            </div>
            <div className="overflow-hidden pt-2">
              <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
                Let&rsquo;s Talk Business
              </h1>
              <p className=" mt-3 mx-auto text-justify indent-10">
                <b className="text-2xl">F</b>eel free to reach out using the
                contact form below. Let&rsquo;s discuss your goals, explore
                possibilities, and craft innovative solutions tailored to your
                specific needs. Looking forward to hearing from you.
              </p>
              <p> Let&rsquo;s Code, Create, and Conquer.</p>
            </div>
          </div>
        </div>
        {/* Divs After Heading   */}
        <div className="w-full h-4/5">
          {/* div contact details */}
          <div className=" h-1/5 rounded-lg m-2  md:px-5 overflow-hidden  text-dBrand dark:text-mainBg grid md:grid-cols-2">
            {/* div1 */}
            <a
              href={"https://github.com/mr-fahad-rajput"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" cd dark:bg-lBrand bg-secondaryBg">
                <div className="w-12 h-12 m-2 mr-4 dark:bg-secondaryBg rounded-md">
                  <img loading="lazy" src={gitIcon} alt="Github Icon" />
                </div>
                <div className="">
                  <h2 className="m-1 dark:text-secondaryBg  underline font-semibold text-balBrand">
                    Github
                  </h2>
                  <p>github.com/Mr-Fahad-Rajput</p>
                </div>
              </div>
            </a>
            {/* div2 */}
            <a
              href={"https://www.linkedin.com/in/mr-fahad-rajput/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" cd dark:bg-lBrand bg-secondaryBg">
                <div className="w-12 h-12 m-2 mr-4 dark:bg-secondaryBg rounded-md">
                  <img loading="lazy" src={linkedIcon} alt="Linked in Icon" />
                </div>
                <div className="">
                  <h2 className="m-1 dark:text-secondaryBg  underline font-semibold text-balBrand">
                    Linked In
                  </h2>
                  <p>linkedin.com/Mr-Fahad-Rajput</p>
                </div>
              </div>
            </a>
            {/* div 3 */}
            <a
              href={"mailto: fahadameenrajput@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" cd dark:bg-lBrand bg-secondaryBg">
                <div className="w-12 h-12 m-2 mr-4 dark:bg-secondaryBg rounded-md">
                  <img loading="lazy" src={gmailIcon} alt="Github Icon" />
                </div>
                <div className="">
                  <h2 className="m-1 dark:text-secondaryBg  underline font-semibold text-balBrand">
                    Email
                  </h2>
                  <p>fahadameenrajput@gmail.com</p>
                </div>
              </div>
            </a>
            {/* div4 */}
            <div
              className="cd bg-secondaryBg dark:bg-lBrand"
              onClick={() => {
                alert(
                  "Scan The Barcode Using a QR Code Scanner For my Whatsapp Contact."
                );
              }}
            >
              <div className="w-12 h-12 m-2  dark:bg-secondaryBg rounded-md">
                <img loading="lazy" src={waIcon} alt="Whatsapp Icon" />
              </div>
              <div className="mr-2 pb-1">
                <h2 className=" dark:text-secondaryBg  underline font-semibold text-balBrand">
                  Whatsapp
                </h2>
                <img
                  loading="lazy"
                  src={tel}
                  alt="tel Number"
                  className="rounded-lg h-10 w-80 dark:md:w-80 dark:max-md:w-[270px]"
                />
              </div>
            </div>
          </div>
          {/* Message Section */}
          <div className="m-4 p-4 bg-secondaryBg rounded-lg dark:bg-balBrand">
            <div className="text-center border-y-2 dark:border-mainBg  border-dBrand">
              <h1 className=" dark:text-secondaryBg text-2xl font-semibold underline cursor-default text-balBrand whitespace-nowrap">
                Your Thought&rsquo;s
              </h1>
              <AlertBox responseStatus={responseStatus} msgImg={msgImg} className="top-0"/>
            </div>
            <div className="">
              <form onSubmit={handleFormSubmit}>
                <div className="">
                  <div className="">
                    <div className=" mt-2">
                      <label className="dark:text-mainBg" htmlFor="yourName">
                        Name:
                      </label>
                      <input
                        id="yourName"
                        type="text"
                        className="inp w-full"
                        placeholder="Full Name"
                        name="name"
                        value={msg.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mt-2">
                      <label className="dark:text-mainBg" htmlFor="yourEmail">
                        Email:
                      </label>
                      <input
                        id="yourEmail"
                        type="email"
                        className="inp w-full"
                        placeholder="email@something.com"
                        name="email"
                        value={msg.email}
                        onChange={handleChange}
                        required
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="">
                    <div className="mt-2">
                      <label className="dark:text-mainBg" htmlFor="yourSubject">
                        Subject:
                      </label>
                      <input
                        id="yourSubject"
                        type="text"
                        className="inp w-full"
                        placeholder="Optional"
                        name="subject"
                        value={msg.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="mt-2">
                      <label className="dark:text-mainBg" htmlFor="yourMessage">
                        Message:
                      </label>
                      <textarea
                        id="yourMessage"
                        rows="4"
                        className="inp w-full"
                        placeholder="Comment, Sugestion, Feedback, or Get Quote"
                        name="message"
                        value={msg.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    name="send"
                    className="p-4 m-1 btn whitespace-nowrap"
                    disabled={isLoading}
                    aria-label="Send Message Button"
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
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
