import mainVideo from "./home.webm";
import poster from "./home.svg";
import DivProjects from "./APIs/Projects/DivProjects";
import logo from '../assets/logo.svg'
import reactLogo from './APIs/Projects/react.svg'
import vanilla from './APIs/Projects/vanillaJs.svg'
import mongoLogo from './APIs/Projects/mongo.svg'
import expressLogo from './APIs/Projects/express.png'
import nodeLogo from './APIs/Projects/node.svg'
import ghpLogo from './Contact/github.svg'
import gcpLogo from './gcp.svg'
import dockerLogo from './docker.svg'
function Home() {
  const ksTechStack = [{name: "React",logo: reactLogo}, {name: "Vanilla Js",logo: vanilla},{name: "Mongo DB ",logo: mongoLogo},{name: "Express",logo: expressLogo},{name: "GH-pages",logo: ghpLogo},{name: "GCP",logo: gcpLogo},{name: "Docker",logo: dockerLogo},{name: "Node",logo: nodeLogo},]

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
            poster={poster}
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
          <h2 className="dark:text-secondaryBg text-2xl font-bold cursor-default text-balBrand text-center Underline">
            Under the Hood.
          </h2>
          <p className="indent-10  max-md:m-2 text-justify tracking-tight py-2 px-5 leading-loose ">
            <b className="text-2xl">I</b>n this section, I offer an in-depth
            look into the inner workings of my web development projects. Curious
            about how it all comes together? Access the complete source code on
            my GitHub repository, where you can explore, learn, and even
            collaborate on projects. If this isn&apos;t what you&apos;re looking for, feel
            free to explore the Builds page for a closer look at my projects and
            API integrations.
          </p>
          <DivProjects
            route={"https://mr-fahad-rajput.github.io/portfolio/"}
            divImg={logo}
            divHeading={"Faadii's Tech Portfolio"}
            description={"Explore Faadii's Tech, featuring four main pages: Home, Builds, About, and Contact. The sidebar showcases My Technology Toolkit and endorsements from past clients. Discover secure Sign-up and Login pages leading to an exclusive Dashboard for Authorization demo. The Builds page highlights past projects and integrates Multiple diverse APIs for interactive web experiences. Explore and learn more about web development."}
            sourceCode={"https://github.com/Mr-Fahad-Rajput/portfolio/tree/main/Floatfolio"}
            techStack={ksTechStack}
          />
        </div>
      </section>
    </>
  );
}
export default Home;
