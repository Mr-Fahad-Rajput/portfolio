import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

function Navbar(props) {
  //eslint-disable-next-line
  const { isLoggedin } = props;
  const [menuVisibilty, setMenuVisibilty] = useState(false);
  const [logo, setLogo] = useState(logoLight);
  const navigate = useNavigate();
  useEffect(() => {
    const handleThemeEvent = (event) => {
      const isDarkTheme = event.detail.darkMode;
      isDarkTheme ? setLogo(logoDark) : setLogo(logoLight);
    };

    window.addEventListener("themeEvent", handleThemeEvent);
    return () => {
      window.removeEventListener("themeEvent", handleThemeEvent);
    };
  }, []);

  const handleMenuButtonClick = () => {
    setMenuVisibilty((menuVisibilty) => !menuVisibilty);
  };

  return (
    <>
      <header className="m-5 rounded-lg innerDiv ">
        <nav className=" flex flex-wrap items-center justify-between md:py-0 text-lg text-dBrand dark:text-mainBg bg-mainBg dark:bg-dBrand rounded-lg ">
          {/* Logo */}
          <div className="w-[20%] h-fill m-1">
            <img
              className="btn w-60 md:h-16"
              src={logo}
              alt="Faadii's Tech logo"
              aria-label="Faadii-logo"
              type="svg"
            />
          </div>
          {/* Responsive Menu SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mobile Menu Button"
            onClick={handleMenuButtonClick}
            className="h-8 w-8 btn md:hidden  m-1 bg-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={` w-full md:flex md:items-center text-center md:w-auto ${
              menuVisibilty ? "" : "hidden"
            }`}
          >
            <ul className="p-2 text-base md:flex md:justify-center ">
              <li>
                <NavLink
                  className=" btn2 "
                  onClick={() => {
                    setMenuVisibilty(false);
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn2"
                  onClick={() => {
                    setMenuVisibilty(false);
                  }}
                  to="/apisPage"
                >
                  Builds
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn2"
                  onClick={() => {
                    setMenuVisibilty(false);
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn2"
                  onClick={() => {
                    setMenuVisibilty(false);
                  }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`md:w-[20%] md:h-fill flex flex-row ${
              !menuVisibilty ? "justify-around" : "justify-between"
            }  ${!menuVisibilty ? "max-md:w-[33%]" : "max-md:w-full"}`}
          >
            {isLoggedin ? (
              <button
                className="md:p-4 py-2 m-1 mx-2 btn whitespace-nowrap "
                aria-label="dashboard Button"
                onClick={() => {
                  navigate("/dashboard", { state: { fromSpecificPage: true } });
                  setMenuVisibilty(false);
                }}
              >
                Dashboard
              </button>
            ) : (
              <button
                className="md:p-4 py-2 m-1 mx-2 btn whitespace-nowrap "
                aria-label="Sign In Button"
                onClick={() => {
                  navigate("/signin", { state: { fromSpecificPage: true } });
                  setMenuVisibilty(false);
                }}
              >
                Sign In
              </button>
            )}
            {isLoggedin ? (
              <button
                className="md:p-4 py-2 m-1 mx-2 btn whitespace-nowrap"
                aria-label="Log Out Button"
                onClick={() => {
                  navigate("/signout", { state: { fromSpecificPage: true } });
                  setMenuVisibilty(false);
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                className="md:p-4 py-2 m-1 mx-2 btn  whitespace-nowrap"
                aria-label="Sign Up Button"
                onClick={() => {
                  navigate("/signup", { state: { fromSpecificPage: true } });
                  setMenuVisibilty(false);
                }}
              >
                Sign Up
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
