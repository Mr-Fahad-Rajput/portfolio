import {useLocation, useNavigate} from "react-router-dom";

function SignIn() {
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
        <div className="relative">
        
              {/* Start Content */}
              <div className="text-center m-auto">
                <div className="relative w-full max-w-sm m-auto p-7 div whitespace-nowrap z-20">
                    <h5 className="mb-8 text-xl dark:text-white font-semibold underline cursor-default">
                      Login
                    </h5>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label className="dark:text-white mr-6" htmlFor="LoginEmail"> Email: </label>
                          <input id="LoginEmail" type="email" className=" inp "
                            placeholder="name@example.com"/>
                        </div>
                        <div className="mb-4">
                          <label className="dark:text-white" htmlFor="LoginPassword"> Password: </label>
                          <input id="LoginPassword" type="password" className=" inp "
                            placeholder="Password:"/>
                        </div>
                        <div className="mb-4">
                          <div className="w-full">
                            <input className=" rounded w-4 h-4 me-2 border border-inherit cursor-pointer" type="checkbox" value="" id="RememberMe"/>
                            <label className=" text-slate-400 cursor-pointer" htmlFor="RememberMe"> Remember me </label>
                          </div>
                          <p className="mt-4 mb-0">
                            <a onClick={( ) => navigate('/resetpass',{ state: { fromSpecificPage: true } })} className="text-balBrand cursor-pointer"> Forgot password ? </a>
                          </p>
                        </div>
                        <div className="mb-4">
                          <a href="" className="px-[40%] py-4 m-1 btn whitespace-nowrap self-center"> Sign in
                          </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 me-2 cursor-default">
                            Dont have an account ?
                          </span>{" "}
                          <a onClick={( ) => navigate('/signup',{ state: { fromSpecificPage: true } })} className="text-dark dark:text-white fw-bold cursor-pointer">
                            Sign Up
                          </a>
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
export default SignIn;