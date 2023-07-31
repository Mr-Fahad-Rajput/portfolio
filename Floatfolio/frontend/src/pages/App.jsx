import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Projects from "./Projects/Projects.jsx";
import APIs from "./APIs/APIs.jsx";

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
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
