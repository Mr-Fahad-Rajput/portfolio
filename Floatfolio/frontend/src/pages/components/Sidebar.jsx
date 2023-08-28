import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FastPriorityQueue from "fastpriorityqueue";

import Comment from "./Comment.jsx";

function Sidebar() {
    const commentQueue = new FastPriorityQueue((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
          const [fetch, setFetch] = useState();
  const location = useLocation();
  const [comment, setComment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
              commentQueue.add(comment);
            });
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
  }, [fetch]);

  useEffect(() => {
    if (!comment || comment.length === 0) {
        return;
      }
    const timer = setInterval(() => {
      if (commentQueue.size > 0) {
        commentQueue.poll();
        
  
        if (currentIndex === comment.length-2) {
          setFetch(!fetch) 
        }
  
        setCurrentIndex((prevIndex) => (prevIndex + 1) % commentQueue.size);
      }
    }, 5000);
  
    return () => clearInterval(timer);
  }, []);

  

  const commentToShow = comment && comment[currentIndex];

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
        <h1>sidebar</h1>
        {console.log(commentQueue)}
        {console.log(commentToShow)}
        {
            console.log("commentQueue size:", commentQueue.size)}
            {console.log("currentIndex:", currentIndex)
        }
        {commentToShow  && (
          <Comment
            userName={commentToShow.name}
            profileImg={commentToShow.profileImg}
            comment={commentToShow.comment}
            createdAt={formatDate(commentToShow.createdAt)}
          />
        )}
      </section>
    </>
  );
}
export default Sidebar;
