import { React, Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Dark from "./components/Dark.jsx";
import ProtectedRoutes from "../ProtectedRoutes.jsx";

const Home = lazy(() => import("./Home.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const APIs = lazy(() => import("./APIs.jsx"));
const About = lazy(() => import("./About/About.jsx"));
const Contact = lazy(() => import("./Contact/Contact.jsx"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const SignOut = lazy(() => import("./components/SignOut.jsx"));
const ResetPass = lazy(() => import("./components/ResetPass.jsx"));

function App() {
  const [isLoggedin,setIsLoggedin] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedin={isLoggedin} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/apis" element={<APIs />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signout" element={<SignOut />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoutes setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin}/>}>
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
