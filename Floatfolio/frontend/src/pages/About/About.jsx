import kid from "./kid1.svg";
import teen from "./teen.svg";
import webdev from "./dev.svg";
import team from "./team.svg";
import jrweb from "./jrweb.svg";
import future from "./future.svg";
function About() {
  return (
    <>
      <section className="mainContent">
        <div>
          <div className="text-center my-4 border-y-2 border-dBrand dark:border-mainBg">
            <h1 className="dark:text-secondaryBg text-2xl font-bold underline cursor-default text-balBrand">
              Building Bytes
            </h1>
          </div>
          {/* earlylife */}
          <div className="text-center md:flex  overflow-hidden  h-1/5 rounded-lg m-2 dark:bg-balBrand bg-secondaryBg   text-dBrand dark:text-mainBg">
            <div className="inline-flex md:max-w-[21vw] md:min-w-[21vw] items-center m-2">
              <img
                src={kid}
                alt="Kid Using laptop"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg"
              />
            </div>
            <div className="overflow-hidden self-center p-2">
              <h2 className="dark:text-secondaryBg text-xl font-Medium underline cursor-default text-balBrand">
                Early Life
              </h2>
              <p className="indent-10  max-md:m-2 text-justify tracking-tight">
                <b className="text-2xl">G</b>reetings! I&rsquo;m Fahad, a highly
                dedicated and enthusiastic web developer with a strong
                foundation in computer science. With a profound love for
                technology since childhood. I delved into the world of computers
                at the age of 5, I developed an avid interest in technology, and
                by 6, I was already exploring the world of computers using CLI
                and MS Paint, setting the stage for an enduring passion for
                programming. At the age of 11, I wrote my first code in Visual
                Basic, and from that moment onward, I knew that programming
                would be an integral part of my life. Throughout my journey,
                I&rsquo;ve been recognized as the &quot;computer guy&quot;
                wherever I went.
              </p>
            </div>
          </div>
          {/* Bachelors */}
          <div className="text-center md:flex flex-row-reverse h-1/5 m-2 overflow-hidden text-dBrand dark:text-mainBg ">
            <div className="inline-flex md:max-w-[21vw] md:min-w-[21vw] items-center m-2">
              <img
                src={teen}
                alt="Teenage Boy on a Computer"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg"
              />
            </div>
            <div className="overflow-hidden self-center p-2">
              <h2 className="dark:text-mainBg text-xl font-Medium underline cursor-default text-balBrand ">
                Bachelor&rsquo;s
              </h2>
              <p className="indent-10  max-md:m-2 text-justify tracking-tight">
                <b className="text-2xl">I</b> embarked on my formal education in
                Software Engineering at Comsats University Lahore at the age of
                19, and this marked the beginning of my professional career as a
                Software Engineer. Over the years, I have delved into various
                computer technologies, including C, C++, C#, Python, Java,
                Blender, Unity, Unreal Engine, and many more. My curiosity led
                me to explore emerging technologies, such as AI, ML, IOT, and
                cloud computing, further expanding my expertise in the
                ever-evolving tech landscape. This has allowed me to stay at the
                forefront of innovation, Equipping me with cutting-edge tools
                and techniques to build powerful digital solutions.
              </p>
            </div>
          </div>
          {/* Web Development */}
          <div className="text-center md:flex h-auto rounded-lg m-2 dark:bg-balBrand bg-secondaryBg  text-dBrand dark:text-mainBg ">
            <div className="inline-flex items-center md:max-w-[21vw] md:min-w-[21vw] m-2">
              <img
                src={webdev}
                alt="Man Programming on a Laptop"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg"
              />
            </div>
            <div className="overflow-hidden self-center p-2 ">
              <h2 className="dark:text-mainBg text-xl font-Medium underline cursor-default text-balBrand">
                Web Development
              </h2>
              <p className="indent-10  max-md:m-2 text-justify tracking-tight">
                <b className="text-2xl">I</b> am a passionate web developer with
                a successful career spanning over 8 years. Starting my Web
                Development journey at 15, I quickly fell in love with Web
                development, becoming proficient in a wide range of
                technologies, including JavaScript, PHP, HTML, CSS, React,
                Redux, Node, Express, Three.js, and more. As a full-stack
                developer, I have honed my skills in creating captivating web
                experiences and possess expertise in handling deployment across
                multiple platforms, making me a valuable asset in the
                ever-evolving world of technology. I focus primarily on web
                development, constantly seeking to refine my craft.
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer h-2 transform duration-500 bg-mainBg rounded-md dark:bg-dBrand hover:scale-x-[1.03]"
            onClick={() => {
              alert(
                "You're In on the Secret, Sherlock! Inform Faadii that 'Mr. Line Sent Regards' and watch 10% vanish from your total!"
              );
            }}
          ></div>
          <div className="text-center my-4 border-y-2 dark:border-mainBg  border-dBrand">
            <h1 className="dark:text-secondaryBg text-2xl font-bold underline cursor-default text-balBrand">
              Work Experience
            </h1>
          </div>
          {/* Internships */}
          <div className=" text-center md:px-2 h-1/5 m-2 overflow-hidden text-dBrand dark:text-mainBg md:flex flex-row-reverse">
            <div className="inline-flex md:max-w-[21vw] md:min-w-[21vw] m-2">
              <img
                src={team}
                alt="Team Working on Web Development"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg "
              />
            </div>
            <div className="overflow-hidden self-center p-2">
              <h2 className="dark:text-mainBg text-xl font-Medium underline cursor-default text-balBrand">
                Internships
              </h2>
              <p className="indent-10  max-md:m-2 text-justify tracking-tight">
                <b className="text-2xl">I</b> kickstarted my journey as a
                Software Engineering Intern at Tech Hub Lahore. There, I gained
                essential experience in team development and a comprehensive
                understanding of various aspects of the field. Building on this
                foundation, I further honed my skills as an Intern DevOps
                Engineer at Work Nation, where I focused on optimizing
                development and deployment processes, ensuring seamless
                workflows for the team.
              </p>
            </div>
          </div>

          {/* Jr Web Developer */}
          <div className="text-center overflow-hidden  h-1/5 rounded-lg m-2 dark:bg-balBrand bg-secondaryBg   text-dBrand dark:text-mainBg md:flex">
            <div className="inline-flex md:max-w-[21vw] md:min-w-[21vw] m-2">
              <img
                src={jrweb}
                alt="Man Sitting on a Laptop"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg "
              />
            </div>
            <div className=" overflow-hidden self-center p-2 ">
              <h2 className="dark:text-mainBg text-xl font-Medium underline cursor-default text-balBrand">
                Jr. Web Developer
              </h2>
              <p className="indent-10  max-md:m-2 text-justify tracking-tight">
                <b className="text-2xl">F</b>or the past 3.5 years, I thrived at
                K. Syndicates as a dedicated Jr. Web Developer, actively
                contributing to various projects and gaining expertise in
                creating dynamic and user-centric web applications. While my
                time at K. Syndicates was rewarding, I yearned to take complete
                ownership of my projects and explore my creativity freely. This
                desire sparked my solo development journey, where I now offer my
                services as a freelance web developer, taking on diverse
                projects that both challenge and empower me.
              </p>
            </div>
          </div>
          {/* Outro */}
          <div className="text-center h-1/5 m-2 md:flex flex-row-reverse overflow-hidden text-dBrand dark:text-mainBg">
            <div className="inline-flex md:max-w-[21vw] md:min-w-[21vw] m-2">
              <img
                src={future}
                alt="Man Working on Web Development"
                className=" w-64 h-56 dark:bg-lBrand rounded-lg"
              />
            </div>
            <div className="overflow-hidden self-center p-2">
              <h2 className="dark:text-mainBg text-xl font-Medium underline cursor-default text-balBrand">
                Future 
              </h2>
              <p className="indent-10 max-md:m-2 text-justify tracking-tighter">
                <b className="text-2xl">I</b> believe in demonstrating my
                abilities through action. For a practical insight into my
                skills, I encourage you to explore my API Integrations page,
                where I showcase my expertise in seamlessly integrating robust
                APIs to enhance the functionality and performance of web
                applications. You can also visit my Projects page, which
                highlights a portfolio of my work in web development.
                <br /> <b className="text-2xl">T</b>hank you for taking the time to
                review my profile. I&rsquo;m eager to collaborate on innovative
                projects that extend the horizons of web development. Looking
                forward to the opportunity to work together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
