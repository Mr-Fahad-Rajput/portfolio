import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Route>
          <Navbar/>
        </Route>
      </div>
    </>
  )
}

export default App
