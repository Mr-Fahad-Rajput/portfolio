import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Dark from "./components/Dark.jsx";
import ProtectedRoutes from "../ProtectedRoutes.jsx";

const Home = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About/About.jsx"));
const Contact = lazy(() => import("./Contact/Contact.jsx"));
const Sidebar = lazy(() => import("./components/Sidebar.jsx"));
// APIs
const APIs = lazy(() => import("./APIs/APIs.jsx"));
const Stripe = lazy(() => import("./APIs/Stripe/Stripe.jsx"));
const MailChimp = lazy(() => import("./APIs/MailChimp/MailChimp.jsx"));
const Maps = lazy(() => import("./APIs/Maps/Maps.jsx"));
const IPGeo = lazy(() => import("./APIs/IPGeo/IPGeo.jsx"));
const OAuthGoogle = lazy(() =>
  import("./APIs/IdentityGoogle/IdentityGoogle.jsx")
);
const CloudVision = lazy(() => import("./APIs/CloudVision/CloudVision.jsx"));
const Chat = lazy(() => import("./APIs/OpenAI/Chat.jsx"));
const Dalle = lazy(() => import("./APIs/OpenAI/Dalle.jsx"));
const Whisper = lazy(() => import("./APIs/OpenAI/Whisper.jsx"));
// User Account
const Dashboard = lazy(() => import("./Dashboard/Dashboard.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const SignOut = lazy(() => import("./components/SignOut.jsx"));
const ResetPass = lazy(() => import("./components/ResetPass.jsx"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy.jsx"));

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [apiDivsToShow, setApiDivsToShow] = useState(0);
  const [apiDivsImages, setApiDivsImages] = useState({
    mailChimp: null,
    stripeImg: null,
    map: null,
    gOAuthIcon: null,
    ipGeoIcon: null,
    visionIcon: null,
    chatIcon: null,
    dalleIcon: null,
    whisperIcon: null,
  });
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
        {isLargeScreen && <Sidebar />}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* APIs */}
            <Route
              exact
              path="/projectPage"
              element={
                <APIs
                  apiDivsToShow={apiDivsToShow}
                  setApiDivsToShow={setApiDivsToShow}
                  apiDivsImages={apiDivsImages}
                  setApiDivsImages={setApiDivsImages}
                />
              }
            />
            <Route exact path="/stripe" element={<Stripe />} />
            <Route exact path="/mailchimp" element={<MailChimp />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/ipgeo" element={<IPGeo />} />
            <Route exact path="/oauthgoogle" element={<OAuthGoogle />} />
            <Route exact path="/cloudvision" element={<CloudVision />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/dalle" element={<Dalle />} />
            <Route exact path="/whisper" element={<Whisper />} />
            {/* Site User Accont */}
            <Route exact path="/signin" element={<SignIn />} />
            <Route
              exact
              path="/signout"
              element={<SignOut setIsLoggedin={setIsLoggedin} />}
            />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/pp" element={<PrivacyPolicy />} />
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Dark />
      </BrowserRouter>
    </>
  );
}

export default App;
