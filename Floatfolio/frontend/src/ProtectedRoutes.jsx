import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(props) {
  const { setIsLoggedin } = props;
  const [isAuthenticated, setIsAuthenticated] = useState("false");
  useEffect(() => {
    const fetchAuth = async () => {
      fetch("https://server.faadii.tech/auth", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_SOME_KEY,
        },
      })
        .then(async (response) => {
          if (response.status === 200 || response.status === 304) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          setIsAuthenticated(false);
        });
    };
    fetchAuth();
  }, [isAuthenticated]);
  useEffect(() => {
    setIsLoggedin(isAuthenticated);
  }, [isAuthenticated]);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;
