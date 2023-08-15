import { useLocation, useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";

function ResetPass() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { fromSpecificPage } = state || {};
  function goBack() {
    if (fromSpecificPage) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }

  return (
    <>
      <section>
        <div
          className="absolute inset-0 bg-black opacity-50 z-10"
          onClick={goBack}
        ></div>
        <div className="relative">
          {/* Start Content */}
          <div className="text-center m-auto">
            <div className="relative w-full max-w-sm m-auto p-7 div z-20">
              <h5 className="mb-8 w-[98%] text-xl dark:text-secondaryBg font-semibold underline cursor-default">
                Reset Your Password
              </h5>
              <p className="mt-4 text-lg text-slate-800 dark:text-mainBg mb-6 cursor-default">
                Please Enter your Email Address, <br /> to get A Password Reset
                Link.
              </p>
              <form>
                <div className="grid grid-cols-1">
                  <div className="mb-4 ">
                    <label className="dark:text-mainBg " htmlFor="LoginEmail">
                      {" "}
                      Email:{" "}
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className=" inp"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4"></div>
                  <div className="mb-4">
                    <a
                      href=""
                      className="px-[40%] py-4 m-1 btn whitespace-nowrap self-center"
                    >
                      {" "}
                      Reset
                    </a>
                  </div>
                  <div className="text-center">
                    <span className="text-slate-600 dark:text-mainBg  me-2 cursor-default">
                      Remember Your Password?
                    </span>{" "}
                    <a
                      onClick={() =>
                        navigate("/signin", {
                          state: { fromSpecificPage: true },
                        })
                      }
                      className="cursor-pointer text-dark dark:text-secondaryBg fw-bold hover:underline"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </form>
              <div
                className="mx-[48%] mt-3 w-5 h-5  hover:scale-125 text-dBrand dark:bg-mainBg rounded-3xl cursor-pointer"
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                <img src={close} alt="Home Button" />
              </div>
            </div>
          </div>
          {/* End Content */}
          {/* TODO Setup Forgot Password and Email Verification */}
        </div>
      </section>
    </>
  );
}
export default ResetPass;
