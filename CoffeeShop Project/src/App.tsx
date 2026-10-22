import { Routes,Route, BrowserRouter,Navigate } from "react-router-dom"
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
import Login from "./pages/Login"
import ProductDetails from "./components/ProductDetails"
import Dashboard from "./admin/pages/Dashboard"
import Products from "./admin/components/Products"
import AdminLayout from "./admin/layout/AdminLayout"
import Analytics from "./admin/components/Analytics"
import Messages from "./admin/components/Messages"
import AdminLogin from "./admin/pages/AdminLogin"
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
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    <Route path="/admin/login" element={<AdminLogin/>} />

    <Route path="/admin" element={
      localStorage.getItem("isAdminLoggedIn")==="true" ? <AdminLayout />
    : <Navigate to="/admin/login" replace />}>
  <Route index element={<Dashboard />} />
  <Route path="products" element={<Products />} />
  <Route path="analytics" element={<Analytics />} />
    <Route path="messages" element={<Messages />} />
</Route>

   </Routes>
   </CartProvider>
</BrowserRouter>
   
  )

}
export default App