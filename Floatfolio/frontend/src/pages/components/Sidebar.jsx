import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FastPriorityQueue from "fastpriorityqueue";

import Comment from "./Comment.jsx";
import Skill from "./Skill.jsx";

function Sidebar() {
  const [animationToggle, setAnimationToggle] = useState(false);
  const [skillIndex, setSkillIndex] = useState(25);
  const skillList = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "Blender 3D" },
    { name: "C" },
    { name: "C++" },
    { name: "PHP" },
    { name: "C#" },
    { name: "MongoDB" },
    { name: "Java" },
    { name: "Python" },
    { name: "Node JS" },
    { name: "Docker" },
    { name: "Express JS" },
    { name: "GSAP" },
    { name: "Tailwind" },
    { name: "Wordpress" },
    { name: "Kubernetes" },
    { name: "Redux" },
    { name: "Unity" },
    { name: "BASH" },
    { name: "CLI" },
    { name: "Pandas" },
    { name: "cPanel" },
    { name: "Google Cloud Platform" },
    { name: "React Native" },
    { name: "Github Pages" },
    { name: "Firebase" },
    { name: "MySQL" },
    { name: "Vercel" },
    { name: "SSMS" },
    { name: "Git Bash" },
    { name: "Three JS" },
    { name: "Websockei IO" },
    { name: "Bootstrap" },
    { name: "RESTful API" },
    { name: "EJS" },
    { name: "PugJS" },
    { name: "LESS" },
    { name: "Heroku" },
    { name: "GoDaddy" },
    { name: "Github" },
    { name: "CI/CD" },
    { name: "SQL" },
    { name: "Hostinger" },
    { name: "WebScrapping" },
    { name: "Data Analysis" },
    { name: "Railway" },
    { name: "Data Visualization" },
    { name: "Postman" },
    { name: "Gitlab" },
    { name: "Figma" },
    { name: "PyGame" },
    { name: "Code Pen" },
    { name: "Adobe XD" },
    { name: "Unity 3D" },
    { name: "Vim" },
    { name: "Beautiful Soup" },
  ];
  const [commentQueue, setCommentQueue] = useState(
    new FastPriorityQueue((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
  );
  const addedCommentIds = new Set();
  const [fetch, setFetch] = useState();
  const [commentToShow, setCommentToShow] = useState("");
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillList.slice(0, 25));
    const updateSkills = () => {
      setSkillIndex((prevSkillIndex) => prevSkillIndex + 1);
      setSkills((prevSkills) => prevSkills.slice(1));
    };
    const timer = setInterval(updateSkills, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSkills((prevSkills) => [...prevSkills, skillList[skillIndex]]);
    if(skillIndex >= skillList.length) {setSkillIndex(0)}
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
            data.comments.forEach((comment) => {
              if (!addedCommentIds.has(comment._id)) {
                commentQueue.add(comment);
                addedCommentIds.add(comment._id);
              }
            });
            setCommentQueue(commentQueue);
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
      if (!commentQueue.isEmpty()) {
        setCommentToShow(commentQueue.poll());
        setCurrentIndex((prevIndex) => (prevIndex + 1) % commentQueue.size);
        if (currentIndex === commentQueue.size - 1) {
          setFetch(!fetch);
        }
        setAnimationToggle((prevToggle) => !prevToggle);
      }
    }, 20000);

    return () => clearInterval(timer);
  }, [fetch]);

  function formatDate(inputDate) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );

    return formattedDate + " " + userTimeZone;
  }

  if (location.pathname === "/signup" || location.pathname === "/signin") {
    return null;
  }

  return (
    <>
      <section className="sidebar">
        <h3 className="mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
          My Tech Toolkit
        </h3>
        <div className="flex flex-wrap">
          {skills &&
            skills.map(
              (skill, index) =>
                skill &&
                skill.name && <Skill key={index} skillName={skill.name} />
            )}
        </div>
        {commentToShow && (
          <div>
            <h3 className="mb-2 text-center dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg  border-dBrand">
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
        )}
      </section>
    </>
  );
}
export default Sidebar;
