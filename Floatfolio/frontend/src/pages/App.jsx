import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects/Projects.jsx";
import APIs from "./APIs/APIs.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/apis" element={<APIs/>} />
        <Route exact path="/signin" element={<SignIn/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
