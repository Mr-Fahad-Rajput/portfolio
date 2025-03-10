import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import Comment from "./Comment.jsx";
import Skill from "./Skill.jsx";

function Sidebar() {
  const [animationToggle, setAnimationToggle] = useState(false);
  const [skillIndex, setSkillIndex] = useState(60);
  const skillList = [
    { name: "React" },
    { name: "C" },
    { name: "Next JS" },
    { name: "Blender 3D" },
    { name: "C++" },
    { name: "React Native" },
    { name: "PHP" },
    { name: "MongoDB" },
    { name: "Java" },
    { name: "VPS Development" },
    { name: "Python" },
    { name: "Node JS" },
    { name: "Docker" },
    { name: "Express JS" },
    { name: "GSAP" },
    { name: "Wordpress" },
    { name: "VPS Deployment" },
    { name: "Redux" },
    { name: "Tailwind" },
    { name: "Unity" },
    { name: "JavaScript" },
    { name: "BASH" },
    { name: "Github Pages" },
    { name: "cPanel" },
    { name: "CLI" },
    { name: "Kubernetes" },
    { name: "Pandas" },
    { name: "Google Cloud Platform" },
    { name: "C#" },
    { name: "Firebase" },
    { name: "MySQL" },
    { name: "WebScrapping" },
    { name: "Vercel" },
    { name: "Git Bash" },
    { name: "Three JS" },
    { name: "Websocket IO" },
    { name: "Pug JS" },
    { name: "Bootstrap" },
    { name: "LESS" },
    { name: "RESTful API" },
    { name: "EJS" },
    { name: "Heroku" },
    { name: "CI/CD" },
    { name: "GoDaddy" },
    { name: "Github" },
    { name: "Hostinger" },
    { name: "SQL" },
    { name: "Data Analysis" },
    { name: "Railway" },
    { name: "Vim" },
    { name: "SSMS" },
    { name: "Postman" },
    { name: "Gitlab" },
    { name: "Data Visualization" },
    { name: "Figma" },
    { name: "PyGame" },
    { name: "Code Pen" },
    { name: "Adobe XD" },
    { name: "Beautiful Soup" },
    { name: "Vue.js" },
    { name: "Nuxt.js" },
    { name: "Angular" },
    { name: "Svelte" },
    { name: "GraphQL" },
    { name: "Apollo" },
    { name: "Backbone.js" },
    { name: "Ember.js" },
    { name: "Meteor" },
    { name: "Knockout.js" },
    { name: "Polymer" },
    { name: "Sass" },
    { name: "Webpack" },
    { name: "Parcel" },
    { name: "Rollup" },
    { name: "Grunt" },
    { name: "Gulp" },
    { name: "Babel" },
    { name: "Jest" },
    { name: "Mocha" },
    { name: "Chai" },
    { name: "Cypress" },
    { name: "Enzyme" },
    { name: "Prettier" },
    { name: "NetBeans" },
    { name: "ESLint" },
    { name: "Inkscape" },
    { name: "Emacs" },
    { name: "VSCode" },
    { name: "Sublime Text" },
    { name: "Atom" },
    { name: "Eclipse" },
    { name: "IntelliJ IDEA" },
    { name: "PyCharm" },
    { name: "Rider" },
    { name: "Android Studio" }
];

 const [comments, setComments] = useState([]);
  const [fetch, setFetch] = useState();
  const [commentToShow, setCommentToShow] = useState("");
  const commentsRef = useRef(comments);
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex); 
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    commentsRef.current = comments;
  }, [comments]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);
  useEffect(() => {
    setSkills(skillList.slice(0, 60));
    const updateSkills = () => {
      setSkillIndex((prevSkillIndex) => prevSkillIndex + 1);
      setSkills((prevSkills) => prevSkills.slice(1));
    };
    const timer = setInterval(updateSkills, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSkills((prevSkills) => [...prevSkills, skillList[skillIndex]]);
    if (skillIndex >= skillList.length) {
      setSkillIndex(0);
    }
  }, [skillIndex]);

  useEffect(() => {
    const handleAPIcalls = async () => {
      try {
        const handleSubmitModule = await import("../apiCalls/getApi.js");
        const handleSubmit = handleSubmitModule.default;
        handleSubmit("comment", "GET")
          .then((res) => {
            if (res.ok) {
              res = res.json();
              return res;
            } else {
              throw new Error("Request failed with status: " + res);
            }
          })
          .then((data) => {
            const receivedComments = data.comments || data;
            setComments(receivedComments);
            setCurrentIndex(0);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});
      } catch (error) {
        console.error("Error importing handleSubmit:", error);
      }
    };

    handleAPIcalls();

    const timer = setInterval(() => {
      // Use refs to get the latest values
      const currentComments = commentsRef.current;
      const currentIdx = currentIndexRef.current;

      if (currentComments.length > 0) {
        setCommentToShow(currentComments[currentComments.length - 1 - currentIdx]);
        setAnimationToggle(prev => !prev);
        
        if (currentIdx >= currentComments.length - 1) {
          setFetch(prev => !prev);
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIdx + 1);
        }
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [fetch]);

  function formatDate(inputDate) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    };

    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );

    return formattedDate;
  }

  if (location.pathname === "/signup" || location.pathname === "/signin") {
    return null;
  }

  return (
    <>
      <section className="sidebar">
        <h3 className="mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
          My Tech Arsenal 
        </h3>
        <div className="flex flex-wrap">
          {skills &&
            skills.map(
              (skill, index) =>
                skill &&
                skill.name && <Skill key={index} skillName={skill.name} />
            )}
        </div>
          {commentToShow ? (
        <div className="absolute right-1 left-1 bottom-1 bg-mainBg dark:bg-dBrand">
          <h3 className="mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand ">
            Endorsments
          </h3>
                <Comment
                  userName={commentToShow.name}
                  profileImg={commentToShow.profileImg}
                  comment={commentToShow.comment}
                  createdAt={formatDate(commentToShow.createdAt)}
                  animate={animationToggle}
                />
        </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin">
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
            </div>
          )}
      </section>
    </>
  );
}
export default Sidebar;
