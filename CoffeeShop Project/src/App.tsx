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
import Order from "./components/Order"
import Heart from "./components/Heart"
import Register from "./pages/Register"
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
    <Route path="/order" element={
      <Order/>
    }/>
    <Route path="/heart" element={<Heart/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
   </CartProvider>
</BrowserRouter>
   
  )

}
export default App