import { useState } from "react";
import whisperIcon from "./whisper.svg";

function Whisper() {
  const [audioFile, setAudioFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [dataBody, setDataBody] = useState({
    message: "",
    status: "",
  });

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file.size <= 5242880) {
      setAudioFile(file);
      setResponse(null);
    } else {
      alert("File Can't be Greater Than 5MBs");
      setAudioFile(null);
    }
  };

  const handleAPIcalls = async () => {
    console.log(audioFile);
    setResponse(null);
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("audio", audioFile);
      formData.append("text", JSON.stringify(dataBody));
      const handleSubmitModule = await import(
        "../../apiCalls/handleImageUpload"
      );
      const handleImageUpload = handleSubmitModule.default;
      handleImageUpload(formData, "whisper")
        .then((res) => {
          if (res.response.text) {
            setResponse(res.response.text);
            return res;
          } else {
            throw new Error("Request failed with status: " + res);
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
      setIsLoading(false);
    }
  };
  function clearInput() {
    setAudioFile(null);
    setResponse(null);
    setDataBody({ message: "", status: "" });
  }
  return (
    <>
      <section className="mainContent">
        <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
          <div className=" inline-flex w-64 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg md:mt-14">
            <a
              href="https://openai.com/research/whisper"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whisperIcon}
                alt="Whisper Icon"
                className=" w-64 h-56 hover:scale-110 transform duration-500 rounded-lg"
                loading="lazy"
              />
            </a>
          </div>
          <div className="overflow-hidden pt-2 mx-2 ">
            <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
              Whisper API
            </h1>
            <p className="  mt-3 mx-auto text-justify tracking-tight indent-10">
              <b className="text-2xl">W</b>hisper by OpenAI is a highly accurate
              Automatic Speech Recognition (ASR) system that converts spoken
              language into written text. Businesses can leverage this
              technology for various purposes, including transcribing customer
              calls for improved service analysis and automating the
              transcription of audio and video content for content creators,
              saving time and resources. Whisper offers translation
              capabilities, facilitating the conversion of content from other
              languages into English.
            </p>
            <p className=" mx-auto text-justify tracking-tighter indent-10">
              <b className="text-2xl">W</b>hisper also enhances accessibility
              for visually impaired individuals by providing precise
              speech-to-text transcription. This feature ensures that the
              visually impaired can access spoken information as text, making
              websites and content more inclusive. Integrating the Whisper API
              into websites not only expands their reach but also fosters
              inclusivity, contributing to business growth and a more accessible
              online presence.
            </p>
          </div>
        </div>
        <div className="mx-2 text-center md:px-10">
          <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
            How To:
          </h3>

          <p className="  mt-3 mx-auto text-justify indent-10">
            <b className="text-2xl">U</b>sing the Whisper transcription
            component is a straightforward process. Begin by uploading an audio
            file that is under 5MB in size. Supported file types include mp3,
            mp4, mpeg, mpga, m4a, wav, and webm. Once your file is uploaded,
            simply click the &quot;Transcribe&quot; button, and then patiently
            await the response. It&apos;s important to note that Whisper
            supports over fifty languages; you can find the complete list of
            supported languages{" "}
            <a
              href="https://help.openai.com/en/articles/7031512-whisper-api-faq#:~:text=What%20languages%20are,Vietnamese%2C%20and%20Welsh."
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-bold hover:text-lg transform duration-300"
            >
              Here
            </a>
            . Keep in mind that the transcription time may vary based on the
            length of the audio. This user-friendly system makes audio-to-text
            transcription a breeze, enhancing accessibility and efficiency for
            your transcription needs.
          </p>
        </div>
        <div className="w-full m-4">
          <div>
            <input
              type="file"
              id="audio_input"
              accept="audio/*"
              onChange={handleAudioChange}
              className="hidden"
            />
            <label
              htmlFor="audio_input"
              className={`btn whitespace-nowrap m-auto p-4 ${
                audioFile ? " " : "w-full"
              }`}
            >
              Choose File
            </label>
            {audioFile && (
              <div className="text-center m-4">
                {audioFile && (
                  <>
                    <audio
                      controls
                      key={URL.createObjectURL(audioFile)}
                      className="mx-auto rounded-full border-2 border-dBrand"
                    >
                      <source
                        src={URL.createObjectURL(audioFile)}
                        type={audioFile.type}
                      />
                    </audio>
                    <figcaption className="underline">
                      {audioFile && audioFile.name}
                    </figcaption>
                  </>
                )}
              </div>
            )}
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
                  Transcribing...
                </div>
              ) : (
                "Transcribe"
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
                <p className=" text-justify bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand">
                  {response}
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default Whisper;
