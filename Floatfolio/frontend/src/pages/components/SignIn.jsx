import {useLocation, useNavigate} from "react-router-dom";
import close from '../../assets/close.svg';
import { useState } from "react";


function SignIn() {
  const { state } = useLocation();
  const navigate = useNavigate();
  //BackEnd Integration
  const [user, setUser] = useState({
    email : "",
    password : ""
  });
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    
    setUser({...user, [name]:value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const {email, password} = user;
    try {
      const res = await fetch("http://localhost:5000/login",
      {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          email,
          password,
          }),
          });
          if (res.status === 400 || !res) {
              const errorMessage = await res.text();
              console.error('Error:', errorMessage);
              window.alert("Invalid Credentials");
            } else {
              window.alert("Login Successful");
              window.location.reload();
              window.location.href = "/";
            }
          } catch (error) {
            console.log(error);
          }
      }

  // Front End Navigation
  const { fromSpecificPage } = state || {};
  function goBack(){
    if (fromSpecificPage) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }    
  }
    
    
  return (
    <>
    <section>
      <div className="absolute inset-0 bg-black opacity-50 z-10" onClick={goBack}></div>
        <div className="relative">
        
              {/* Start Content */}
              <div className="text-center m-auto">
                <div className="relative w-full max-w-sm m-auto p-7 div whitespace-nowrap z-20">
                    <h5 className="mb-2 text-xl dark:text-mainBg font-semibold underline cursor-default w-[98%]">
                      Login
                    </h5>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label className="dark:text-mainBg mr-4" htmlFor="RegisterEmail" > Email: </label>
                          <input id="RegisterEmail" type="email"  className="inp" placeholder="name@example.com"
                          name="email"
                          value={user.email}
                          onChange={handleInput}/>
                        </div>
                        <div className="mb-4">
                        <label className="dark:text-mainBg" htmlFor="RegisterPassword" >Password:</label>
                          <input id="RegisterPassword" type="password" className=" inp" placeholder="Something Strong"
                          name="password"
                          value={user.password}
                          onChange={handleInput}/>
                        </div>
                        <div className="mb-4">
                          <div className="w-full">
                            <input className=" rounded w-4 h-4 me-2 border border-inherit cursor-pointer" type="checkbox" value="" id="RememberMe"/>
                            <label className=" text-slate-600 dark:text-mainBg cursor-pointer" htmlFor="RememberMe"> Remember me </label>
                          </div>
                          <p className="mt-4 mb-0">
                            <a onClick={( ) => navigate('/resetpass',{ state: { fromSpecificPage: true } })} className="text-balBrand cursor-pointer hover:underline dark:hover:text-mainBg dark:text-secondaryBg"> Forgot password ? </a>
                          </p>
                        </div>
                        <div className="mb-4">
                        <button type="submit" className="px-[40%] py-3 m-1 btn whitespace-nowrap self-center">
                            Sign In
                            </button>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-600 dark:text-mainBg me-2 cursor-default">
                            Dont have an account ?
                          </span>{" "}
                          <a onClick={( ) => navigate('/signup',{ state: { fromSpecificPage: true } })} className=" dark:text-secondaryBg fw-bold cursor-pointer hover:underline dark:hover:text-mainBg">
                            Sign Up
                          </a>
                        </div>
                      </div>
                    </form>
                     <div className="mx-[48%] mt-3 w-5 h-5  hover:scale-125 text-dBrand dark:bg-mainBg rounded-3xl cursor-pointer" onClick={()=>{navigate('/', { replace: true })}}><img src={close} alt="Home Button" /></div>
                  </div>
              </div>
              {/* End Content */}
            </div>
    </section>
    </>
  )
}
export default SignIn;