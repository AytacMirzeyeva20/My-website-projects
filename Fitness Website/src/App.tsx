import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Classes from "./pages/Classes"
import Joinclass from "./pages/Joinclass"
import Footer from "./pages/Footer"
import Register from "./login/Register"
import { Route,Routes } from "react-router-dom"
import Exploreclass from "./pages/Exploreclass"
function App(){
  return (
    <>
   <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Classes />
              <Joinclass />
              <Footer />
            </>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/exploreclass" element={<Exploreclass/>}/>
      </Routes>
  
    </>
  )
   
}

export default App