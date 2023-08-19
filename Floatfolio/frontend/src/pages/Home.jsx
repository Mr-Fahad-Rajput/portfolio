import { useEffect, useState } from "react";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState("e");

  useEffect(() => {
    async function checkAuthentication() {
      
      try {
        const res = await fetch("http://localhost:5000/test",{
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_SOME_KEY
        },
        credentials: 'include',
      }); 
        if (res.status === 200) {
          
          setIsAuthenticated("true");
        } else {
          setIsAuthenticated("false");
        }
      } catch (error) {
        // let errorMessage = await error.text();
        // console.error("Error:", errorMessage);
        setIsAuthenticated(false);
      }
    }

    checkAuthentication();
  }, []);
  return (
    
    <>
      <section className="mainContent">
        <h1 className="">{isAuthenticated}</h1>
      </section>
    </>
  );
}
export default Home;
