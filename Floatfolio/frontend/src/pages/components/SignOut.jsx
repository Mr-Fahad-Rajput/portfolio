import { useEffect, useState } from "react";

import logImg from "../../assets/logout.svg";
import AlertBox from "./AlertBox";
import { useNavigate } from "react-router-dom";

function LogOut(props) {
  const { setIsLoggedin } = props;
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    text: "",
  });
  useEffect(() => {
    const fetchAuth = async () => {
      fetch("http://localhost:5000/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_SOME_KEY,
        },
      })
        .then(async (response) => {
          if (response.status === 200 || response.status === 304) {
            setIsLoggedin(false);
            setResponseStatus({
              status: true,
              text: "You've been logged out successfully. Looking forward to your next visit!",
            });
            setTimeout(() => {
              navigate("/", { state: { fromSpecificPage: true } });
            }, 4000);
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    };
    fetchAuth();
  }, []);

  return (
    <>
      <section className="mainContent">
        <AlertBox
          responseStatus={responseStatus}
          msgImg={logImg}
          className="top-0"
        />
      </section>
    </>
  );
}
export default LogOut;
