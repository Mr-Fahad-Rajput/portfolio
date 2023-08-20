import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(props) {
  const {setIsLoggedin, isLoggedin} = props;
  const [isAuthenticated, setIsAuthenticated] = useState("false");
  useEffect(() => {
    const fetchAuth = async () => {
      fetch("http://localhost:5000/auth", {
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
  }, [isAuthenticated,isLoggedin]);
  useEffect(()=>{
    setIsLoggedin(isAuthenticated);
  },[isAuthenticated]);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;
