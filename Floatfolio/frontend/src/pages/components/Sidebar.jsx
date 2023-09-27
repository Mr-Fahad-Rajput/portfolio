import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FastPriorityQueue from "fastpriorityqueue";

import Comment from "./Comment.jsx";
import Skill from "./Skill.jsx";
import reactLogo from "../../assets/react.svg";
import jsLogo from "../../assets/vanillaJs.svg";
import blender from "../../assets/blender.svg";

function Sidebar() {
  const [animationToggle, setAnimationToggle] = useState(false);
  const skillList = [
    { logo: reactLogo, name: "React" },
    { logo: jsLogo, name: "JavaScript" },
    { logo: blender, name: "Blender 3D" },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      name: "C",
    },
    { name: "C++" },
    { name: "PHP" },
    { name: "C#" },
    { name: "Java" },
    { name: "Python" },
    { name: "MongoDB" },
    { name: "Node" },
    { name: "Express" },
    { name: "GSAP" },
    { name: "Redux" },
    { name: "Tailwind" },
    { name: "Wordpress" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "Unity" },
    { name: "Blender" },
    { name: "BASH" },
    { name: "CLI" },
    { name: "Pandas" },
    { name: "Google Clound Platform" },
    { name: "React Native" },
    { name: "Firebase" },
    { name: "SQL" },
    { name: "MySQL" },
    { name: "SSMS" },
    { name: "SQL Lite" },
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

  // Function to update the skills
  const updateSkills = () => {
    if (skillList.length > 0) {
      // Remove the top-most skill
      setSkills((prevSkills) => prevSkills.slice(1));
      // Add a new skill from the list at the end
      setSkills((prevSkills) => [...prevSkills, skillList[0]]);
    }
  };

  // Use useEffect to start the timer when the component mounts
  useEffect(() => {
    const timer = setInterval(updateSkills, 10000); // 10 seconds
    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);

  // Initial load of 20 skills
  useEffect(() => {
    setSkills(skillList.slice(0, 20));
  }, []);

  // Fetch Comments
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
          Skills
        </h3>
        {/* <div className="flex flex-wrap">
            <Skill skillLogo={reactLogo} skillName={"React"}/>
            <Skill skillLogo={jsLogo} skillName={"JavaScript"}/>
            <Skill skillLogo={blender} skillName={"Blender 3D"}/>
            <Skill skillName={"Blender 3D"}/>
          </div> */}
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <Skill key={index} skillLogo={skill.logo} skillName={skill.name} />
          ))}
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
