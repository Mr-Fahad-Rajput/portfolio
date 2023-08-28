import { useLocation } from "react-router-dom";
import Comment from "./Comment.jsx";
import { useEffect, useState } from "react";
function Sidebar() {
  const location = useLocation();
  const [comment, setComment] = useState();
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
              console.log(res);
              return res;
            } else {
              throw new Error("Request failed with status: " + res);
            }
          })
          .then((data) => {
            setComment(data.comments);
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
    console.log(comment);
  }, []);
  if (location.pathname === "/signup" || location.pathname === "/signin") {
    return null;
  }

  return (
    <>
      <section className="sidebar">
        <h1>sidebar</h1>
        <Comment></Comment>
      </section>
    </>
  );
}
export default Sidebar;
