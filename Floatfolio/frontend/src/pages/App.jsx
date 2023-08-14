import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects.jsx";
import APIs from "./APIs.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import ResetPass from "./components/ResetPass";
import Dark from "./components/Dark.jsx";

function App() {
  return (
    <>
      <div className=" dark:bg-neutral-700 p-5"><BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/apis" element={<APIs />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/resetpass" element={<ResetPass />} />
        </Routes>
        <Dark />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
