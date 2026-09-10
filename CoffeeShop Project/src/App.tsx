import { Routes,Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import About from "./pages/About"
import Menu from "./pages/Menu"
import ProductNavbar from "./components/ProductNavbar"
import CartProvider from "./context/CartProvider"
import Cart from "./components/Cart"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
function App(){
  return(
    <BrowserRouter>
    <CartProvider>
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
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/gallery" element={
      <>
     <Navbar/>
     <Gallery/> 
     <Footer/>
      </>
    }/>
    <Route path="/contact" element={
      <>
<Navbar/>
<Contact/>
<Footer/>
    </>
    }
    />
   </Routes>
   </CartProvider>
</BrowserRouter>
   
  )

}
export default App