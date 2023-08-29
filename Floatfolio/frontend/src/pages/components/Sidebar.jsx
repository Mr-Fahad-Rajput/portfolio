import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FastPriorityQueue from "fastpriorityqueue";

import Comment from "./Comment.jsx";

function Sidebar() {
    const [animationToggle, setAnimationToggle] = useState(false);

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
          /></div>
        )}
      </section>
    </>
  );
}
export default Sidebar;
