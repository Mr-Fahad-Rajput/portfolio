import {useLocation, useNavigate} from "react-router-dom";

function SignUp() {
  const { state } = useLocation();
  const navigate = useNavigate();
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
        <div className=" relative">
              {/* Start Content */}
              <div className="text-center m-auto ">
                <div className="relative w-full max-w-sm m-auto p-5 div whitespace-nowrap z-20">
                    <h5 className="mb-8 text-xl dark:text-white font-semibold underline cursor-default">
                      SignUp
                    </h5>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label className="dark:text-white mr-5" htmlFor="RegisterName" > Name:</label>
                          <input id="RegisterName" type="text"  className=" inp" placeholder="Full Name"/>
                        </div>
                        <div className="mb-4">
                          <label className="dark:text-white mr-4" htmlFor="RegisterEmail" > Email: </label>
                          <input id="RegisterEmail" type="email"  className="inp" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-4">
                          <label className="dark:text-white" htmlFor="RegisterPassword" >Password:</label>
                          <input id="RegisterPassword" type="password" className=" inp" placeholder="Something Strong"/>
                        </div>
                        <div className="mb-4">
                          <div className="w-full"> 
                          <input className=" rounded w-4 h-4 me-2 border border-inherit cursor-pointer" type="checkbox" value="" id="AcceptT&C"/> 
                          <label className=" text-slate-400" htmlFor="AcceptT&C">   I Accept{" "}   
                          <a href="" className="text-balBrand hover:underline">     Terms And Condition   </a> 
                          </label>
                          </div>
                        </div>
                        <div className="mb-4 ">
                          <a href="" className="px-[40%] py-4 m-1 btn whitespace-nowrap self-center"> Register </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 me-2 cursor-default"> Already have an account ?{" "}
                          </span>{" "}
                          <a onClick={( ) => navigate('/signin',{ state: { fromSpecificPage: true } })} className=" dark:text-white fw-bold cursor-pointer hover:underline"> Sign in</a>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
              {/* End Content */}
              
        </div>
    </section>
    </>
  )
}
export default SignUp;