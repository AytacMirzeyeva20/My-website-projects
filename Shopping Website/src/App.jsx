import React from 'react'
import Home from './pages/home'
import Navbar  from './pages/navbar'
import Footer from './pages/footer'
import Products from './pages/products'
import { HashRouter,Route,Routes } from 'react-router-dom'
import ShopNavbar from './pages/ShopNavbar'
import About from './pages/about'
import Contact from './pages/contact'
import Collection from './pages/collection'
import Cart from './pages/cart'
import Heart from './pages/heart'
import Price from './pages/price'
import ProductDetails from './pages/productDetails'
import Login from './pages/login'
import Register from './pages/register'
import Clothes from './pages/clothes'
import Button from './pages/button'


import { AdminProvider } from './admin/context/AdminContext'
import AdminLayout from './admin/components/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminProducts from './admin/pages/AdminProducts'
import ProductForm from './admin/pages/ProductForm'
import AdminOrders from './admin/pages/AdminOrders'
import AdminLogin from './admin/components/AdminLogin'
import ProtectedAdmin from './admin/components/ProtectedAdmin'
import { Check } from 'lucide-react'
import CheckoutForm from './pages/CheckoutForm'
export default function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
      }/>
     <Route path="/products" element={
        <>
        <ShopNavbar/>
        <Products/>
        </>
      }/>
      <Route path="/about" element={
        <>
        <Navbar/>
        <About/>
        <Footer/>
        </>
      }
        />
        <Route path="/collection" element={
          <>
          <Navbar/>
          <Collection/>
          <Footer/>
          </>
        } />
        <Route path="/contact" element={
    <>
    <Navbar/>
    <Contact/>
    <Footer/>
    </>
        } />
        <Route path="/cart" element={ 
          <>
          <Cart/>
          </>
        }/>
        <Route  path="/heart" element={
          <>
          <ShopNavbar/>
          <Heart/>
          </>
        }/>
        <Route path="/clothes" element={
          <>
          <Clothes/>
          </>
        } /> 
        <Route path="/productDetails/:id" element={
          <>
          <ShopNavbar/>
          <ProductDetails/>
          </>
        } />
        <Route path="/checkoutform" element={
          <CheckoutForm/>
        } />
        <Route path="/price" elemet={<Price/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/admin-login" element={<AdminLogin />} />

<Route
  path="/admin"
  element={
    <ProtectedAdmin>
      <AdminProvider>
        <AdminLayout />
      </AdminProvider>
    </ProtectedAdmin>
  }
>
          <Route index element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="products/new" element={<ProductForm/>}/>
          <Route path="products/edit/:id" element={<ProductForm/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
        </Route>


    </Routes>
    </HashRouter>
    
    </>
  )
}