import mainVideo from "./home.webm";
import DivProjects from "./APIs/Projects/DivProjects";
import logo from "../assets/float.webp";
import reactLogo from "./APIs/Projects/react.svg";
import vanilla from "./APIs/Projects/vanillaJs.svg";
import mongoLogo from "./APIs/Projects/mongo.svg";
import expressLogo from "./APIs/Projects/express.png";
import nodeLogo from "./APIs/Projects/node.svg";
import ghpLogo from "./vercel.svg";
import gcpLogo from "./gcp.svg";
import dockerLogo from "./docker.svg";
import pageSpeed from "../assets/pageSpeed.svg";
import gt from "../assets/gt.svg";
function Home() {
  const ksTechStack = [
    { name: "React", logo: reactLogo },
    { name: "Vanilla Js", logo: vanilla },
    { name: "Mongo DB ", logo: mongoLogo },
    { name: "Express", logo: expressLogo },
    { name: "Vercel", logo: ghpLogo },
    { name: "GCP", logo: gcpLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Node", logo: nodeLogo },
  ];

  return (
    <>
      <section className="mainContent">
        <div className="md:flex p-6 bg-secondaryBg rounded-lg dark:bg-balBrand">
          <video
            src={mainVideo}
            className="aspect-video rounded-lg md:w-1/2 m-auto"
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
          ></video>
          <div className="w-full">
            <h1 className="dark:text-secondaryBg text-4xl font-bold cursor-default text-balBrand text-center">
              Greetings!
            </h1>
            <p className="indent-10  max-md:m-2 text-justify tracking-tight md:pl-6 pr-0 leading-loose ">
              <b className="text-2xl">W</b>elcome to Faadii&apos;s Tech, your
              portal to exceptional web solutions! With a passion for
              technology, I&apos;m here to transform your ideas into remarkable
              digital realities. I insist you take a look at the
              &quot;Builds&quot; page, where you can witness the web solutions
              I&apos;ve created. Let&apos;s collaborate to bring your vision to
              life.
            </p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="dark:text-secondaryBg text-2xl font-bold cursor-default text-balBrand text-center underline">
            Under the Hood
          </h2>
          <div className="md:flex">
            <p className="indent-10  max-md:m-2 text-justify tracking-tight py-2 px-5 leading-loose ">
              <b className="text-2xl">I</b>n this section, I offer an in-depth
              look into the inner workings of my web development projects.
              Curious about how it all comes together? Access the complete
              source code on my GitHub repository, where you can explore, learn,
              and even collaborate on projects. If this isn&apos;t what
              you&apos;re looking for, feel free to explore the Builds page for
              a closer look at my projects and API integrations.
            </p>
            <div className="m-2">
              <h2 className="dark:text-secondaryBg text-lg font-semibold cursor-default text-balBrand text-center underline whitespace-nowrap">Site Performance Reports</h2>
          <a href={"https://pagespeed.web.dev/analysis/https-portfolio-faadii-tech/vcsf32dzlc?form_factor=desktop"} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-lBrand  border-2 rounded-lg text-dBrand dark:text-dBrand my-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly bg-secondaryBg ">
              <h3 className="m-1 my-auto dark:text-dBrand text-sm font-semibold text-balBrand">
                PageSpeed <br />By Google
              </h3>
              <div className="aspect-square w-12">
                <img  src={pageSpeed} alt="Preview Icon" className="w-14 h-auto"/>
              </div>
            </div>
          </a>
          <a href={"https://gtmetrix.com/reports/portfolio.faadii.tech/9FbiSdCE/"} target="_blank" rel="noopener noreferrer">
            <div className="border-dBrand dark:border-lBrand  border-2 rounded-lg text-dBrand dark:dBrand my-2 cursor-pointer transform transition duration-500 hover:scale-110 flex justify-evenly bg-secondaryBg">
              <h3 className="m-1 my-auto dark:text-dBrand text-sm font-semibold text-balBrand">
                GT Metrix
              </h3>
              <div className="aspect-square w-12">
                <img src={gt} alt="Github Icon" className="w-14 h-auto" />
              </div>
            </div>
          </a>
        </div>
          </div>
          <DivProjects
            route={"https://mr-fahad-rajput.github.io/portfolio/"}
            divImg={logo}
            divHeading={"Faadii's Tech Portfolio"}
            description={
              "Explore Faadii's Tech, featuring four main pages: Home, Builds, About, and Contact. The sidebar showcases My Technology Toolkit and endorsements from past clients. Discover secure Sign-up and Login pages leading to an exclusive Dashboard for Authorization demo. The Builds page highlights past projects and integrates Multiple diverse APIs for interactive web experiences. Explore and learn more about web development."
            }
            sourceCode={
              "https://github.com/Mr-Fahad-Rajput/portfolio/tree/main/Floatfolio"
            }
            techStack={ksTechStack}
          />
        </div>
      </section>
    </>
  );
}
export default Home;
