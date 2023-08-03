import './SignUp.css';

function SignUp() {
    
    
  return (
    <>
     <section className="position-relative">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="container-fluid relative">
              {/* Start Content */}
              <div className="text-center m-auto">
                <div className="w-full max-w-sm m-auto p-7 div whitespace-nowrap">
                    <h5 className="mb-8 text-xl dark:text-white font-semibold underline">
                      SignUp
                    </h5>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label className="dark:text-white mr-4" htmlFor="RegisterName" > Name:</label>
                          <input id="RegisterName" type="text"  className="customFormInput form-input  md:p-4 py-2 m-1 rounded-lg " placeholder="Full Name"/>
                        </div>
                        <div className="mb-4">
                          <label className="dark:text-white mr-4" htmlFor="RegisterEmail" > Email: </label>
                          <input id="RegisterEmail" type="email"  className="customFormInput form-input md:p-4 py-2 m-1 rounded-lg " placeholder="name@example.com"/>
                        </div>
                        <div className="mb-4">
                          <label className="dark:text-white" htmlFor="RegisterPassword" >Password:</label>
                          <input id="RegisterPassword" type="password" className="customFormInput form-input md:p-4 py-2 m-1 rounded-lg" placeholder="Something Strong"/>
                        </div>
                        <div className="mb-4">
                          <div className="w-full"> 
                          <input className="form-checkbox rounded w-4 h-4 me-2 border border-inherit" type="checkbox" value="" id="AcceptT&C"/> 
                          <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">   I Accept{" "}   
                          <a href="" className="text-balBrand">     Terms And Condition   </a> 
                          </label>
                          </div>
                        </div>
                        <div className="mb-4 ">
                          <a href="" className="px-[40%] py-4 m-1 btn whitespace-nowrap self-center"> Register </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 dark:text-slate-300 me-2"> Already have an account ?{" "}
                          </span>{" "}
                          <a href="signin" className="text-dark dark:text-white fw-bold"> Sign in</a>
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