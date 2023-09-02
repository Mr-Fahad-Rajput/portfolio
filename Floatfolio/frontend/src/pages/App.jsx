import { React, Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Dark from "./components/Dark.jsx";
import ProtectedRoutes from "../ProtectedRoutes.jsx";

const Home = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About/About.jsx"));
const Contact = lazy(() => import("./Contact/Contact.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const Sidebar = lazy(() => import("./components/Sidebar.jsx"));
// APIs
const APIs = lazy(() => import("./APIs/APIs.jsx"));
const Stripe = lazy(() => import("./APIs/Stripe/Stripe.jsx"));
const MailChimp = lazy(() => import("./APIs/MailChimp/MailChimp.jsx"));
const Maps = lazy(() => import("./APIs/Maps/Maps.jsx"));
const IPGeo = lazy(() => import("./APIs/IPGeo/IPGeo.jsx"));
const OAuthGoogle = lazy(() => import("./APIs/IdentityGoogle/IdentityGoogle.jsx"));
const CloudVision = lazy(() => import("./APIs/CloudVision/CloudVision.jsx"));
// User Account
const Dashboard = lazy(() => import("./Dashboard/Dashboard.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const SignOut = lazy(() => import("./components/SignOut.jsx"));
const ResetPass = lazy(() => import("./components/ResetPass.jsx"));

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 826);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 826);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedin={isLoggedin} />
        <Suspense fallback={<Loader />}>
          {isLargeScreen && <Sidebar />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            {/* APIs */}
            <Route exact path="/apis" element={<APIs />} />
            <Route exact path="/stripe" element={<Stripe />} />
            <Route exact path="/mailchimp" element={<MailChimp />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/ipgeo" element={<IPGeo />} />
            <Route exact path="/oauthgoogle" element={<OAuthGoogle />} />
            <Route exact path="/CloudVision" element={<CloudVision />} />
            {/* Site User Accont */}
            <Route exact path="/signin" element={<SignIn />} />
            <Route
              exact
              path="/signout"
              element={<SignOut setIsLoggedin={setIsLoggedin} />}
            />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              element={
                <ProtectedRoutes
                  setIsLoggedin={setIsLoggedin}
                  isLoggedin={isLoggedin}
                />
              }
            >
              <Route exact path="/Dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/resetpass" element={<ResetPass />} />
          </Routes>
        </Suspense>
        <Dark />
      </BrowserRouter>
    </>
  );
}

export default App;
