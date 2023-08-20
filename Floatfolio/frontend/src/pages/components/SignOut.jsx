import { useEffect } from "react";

function LogOut(props) {
  const {setIsLoggedin} = props;

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
        <h1 className="">LogOut</h1>
      </section>
    </>
  );
}
export default LogOut;
