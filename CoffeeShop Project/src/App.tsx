import { Routes,Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import About from "./pages/About"
import Menu from "./pages/Menu"
import ProductNavbar from "./components/ProductNavbar"
function App(){
  return(
    <BrowserRouter>
   <Routes>
      <Route path="/" element={
        <>
      <Navbar/>
      <Home/>
      <Footer/>
      </>
    }
    />
    <Route path="/about" element={
      <>
      <Navbar/>
      <About/>
      <Footer/>
      </>
    }/>
    <Route path="/menu" element={
      <>
      <ProductNavbar/>
      <Menu/>
      </>
    } />
   </Routes>
</BrowserRouter>
   
  )

}
export default App