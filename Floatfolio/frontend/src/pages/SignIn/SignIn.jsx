import './SignIn.css';


function SignIn() {
    
    
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
                      Login
                    </h5>
                    <form className="ltr:text-left rtl:text-right">
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          <label
                            className="dark:text-white"
                            htmlFor="LoginEmail"
                          >
                            Email Address:
                          </label>
                          <input
                            id="LoginEmail"
                            type="email"
                            className="customFormInput form-input mt-3"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="dark:text-white"
                            htmlFor="LoginPassword"
                          >
                            Password:
                          </label>
                          <input
                            id="LoginPassword"
                            type="password"
                            className="customFormInput form-input mt-3"
                            placeholder="Password:"
                          />
                        </div>
                        <div className="flex justify-between mb-4">
                          <div className="inline-flex items-center">
                            <input
                              className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit"
                              type="checkbox"
                              value=""
                              id="RememberMe"
                            />
                            <label
                              className="form-check-label text-slate-400"
                              htmlFor="RememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                          <p className="text-slate-400 mb-0">
                            <a href="reset-password.html" className="text-slate-400">
                              Forgot password ?
                            </a>
                          </p>
                        </div>
                        <div className="mb-4">
                          <a
                            href=""
                            className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
                          >
                            Login / Sign in
                          </a>
                        </div>
                        <div className="text-center">
                          <span className="text-slate-400 dark:text-slate-300 me-2">
                            Dont have an account ?
                          </span>{" "}
                          <a
                            href="signup"
                            className="text-dark dark:text-white fw-bold"
                          >
                            Sign Up
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
export default SignIn;