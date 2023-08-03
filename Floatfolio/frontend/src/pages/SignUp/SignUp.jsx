import './SignUp.css';

function SignUp() {
    
    
  return (
    <>
     <section className="position-relative bg-[url('../../assets/images/bg/auth.jpg')] bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="lg:col-span-4">
            <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">
              {/* Start Logo */}
              <div className="text-center mx-auto">
                <a href="index.html">
                  <img src="assets/images/logo-light.png" alt="" />
                </a>
              </div>
              {/* End Logo */}
              {/* Start Content */}
              <div className="text-center my-auto">
                <div className="w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                  <div className="grid grid-cols-1">
                    <h5 className="mb-8 text-xl dark:text-white font-semibold">
                      Signup
                    </h5>
                    <form className="ltr:text-left rtl:text-right">
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label
                            className="dark:text-white"
                            htmlFor="RegisterName"
                          >
                            Your Name:
                          </label>
                          <input
                            id="RegisterName"
                            type="text"
                            className="customFormInput form-input mt-3"
                            placeholder="Harry"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="dark:text-white"
                            htmlFor="RegisterEmail"
                          >
                            Email Address:
                          </label>
                          <input
                            id="RegisterEmail"
                            type="email"
                            className="customFormInput form-input mt-3"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="dark:text-white"
                            htmlFor="RegisterPassword"
                          >
                            Password:
                          </label>
                          <input
                            id="RegisterPassword"
                            type="password"
                            className="customFormInput form-input mt-3"
                            placeholder="Password:"
                          />
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center w-full mb-0">
                            <input
                              className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit"
                              type="checkbox"
                              value=""
                              id="AcceptT&C"
                            />
                            <label
                              className="form-check-label text-slate-400"
                              htmlFor="AcceptT&C"
                            >
                              I Accept{" "}
                              <a href="" className="text-orange-600">
                                Terms And Condition
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="mb-4">
                          <a
                            href=""
                            className="md:p-4 py-2 m-1 btn whitespace-nowrap"
                          >
                            Register
                          </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 dark:text-slate-300 me-2">
                            Already have an account ?{" "}
                          </span>{" "}
                          <a
                            href="signin"
                            className="text-dark dark:text-white fw-bold"
                          >
                            Sign in
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* End Content */}
              
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
    {/*end section*/}  
    </>
  )
}
export default SignUp;