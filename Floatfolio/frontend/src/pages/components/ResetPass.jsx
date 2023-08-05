import {useLocation, useNavigate} from "react-router-dom";


function ResetPass() {
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
                <div className="relative w-full max-w-sm m-auto p-7 div z-20">
                    <h5 className="mb-8 text-xl dark:text-white font-semibold underline cursor-default">
                      Reset Your Password
                    </h5>
                        <p className="mt-4 text-lg text-slate-800 mb-6 cursor-default">
                        Please Enter your Email Address, <br/> to get A Password Reset Link.
                        </p>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-4 ">
                          <label className="dark:text-white " htmlFor="LoginEmail"> Email: </label>
                          <input id="LoginEmail" type="email" className=" inp" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-4">
                        </div>
                        <div className="mb-4">
                          <a href="" className="px-[40%] py-4 m-1 btn whitespace-nowrap self-center"> Reset
                          </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 me-2 cursor-default">
                            Remember Your Password?
                          </span>{" "}
                          <a onClick={( ) => navigate('/signin',{ state: { fromSpecificPage: true } })} className="cursor-pointer text-dark dark:text-white fw-bold hover:underline">
                            Sign In
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
export default ResetPass;