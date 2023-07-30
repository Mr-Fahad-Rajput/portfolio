import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="bg-gray-50">
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
