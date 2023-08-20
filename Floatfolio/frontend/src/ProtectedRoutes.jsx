import React, { useEffect, useState } from "react";
import { Navigate, Outlet} from "react-router-dom";

function ProtectedRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuthentication() {
      
      try {
        const response = await fetch("http://localhost:5000/auth",{
        method: "GET",  
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_SOME_KEY
        }}); 
        if (response.ok) {
          setIsAuthenticated(true);
          console.log(isAuthenticated);
          
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        let errorMessage = await response.text();
        console.error("Error:", errorMessage);
        setIsAuthenticated(false);
      }
    }

    checkAuthentication();
  }, []);

  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/signin'/>
  );
}

export default ProtectedRoutes;
