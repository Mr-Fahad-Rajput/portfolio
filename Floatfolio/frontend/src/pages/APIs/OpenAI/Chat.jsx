

function Chat() {
 

  return (
    <>
       <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2 ">
          <div className="inline-flex w-64 h-full md:float-left place-items-center mt-20 rounded-lg m-2 dark:bg-mainBg">
            <a
              href="https://cloud.google.com/vision"
              target="_blank"
              rel="noreferrer"
            >
              <img
                // src={}
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
          
        </div>
    </>
  );
}
export default Chat;
