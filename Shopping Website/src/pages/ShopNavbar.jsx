import React from 'react'
import { ShoppingBag } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';
export default function ShopNavbar() {
  const {state}=useCart();
  return (
    <>
       <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 text-white  bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-lg  dark:bg-black ">
  <div className="flex items-center justify-between max-w-7xl mx-auto">
    <div className="flex justify-start">
<Link to="/">
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-[0.3em] uppercase hover:text-amber-400 transition duration-300">
          Luxue
        </h1>
      </Link>
    </div>
    <div className="hidden md:flex justify-center">
      <ul className="flex gap-8 lg:gap-12 text-sm font-medium tracking-widest uppercase">
        <li className="relative group">
          <Link to="/" className="py-2 hover:text-amber-400 transition duration-300">
  Home
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/about" className="py-2 hover:text-amber-400 transition duration-300">
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/collection" className="py-2 hover:text-amber-400 transition duration-300">
            Collection
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/contact" className="py-2 hover:text-amber-400 transition duration-300">
           Contact
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </div>
     <div className=' flex gap-8 justify-end items-center'>
      <div className='flex flex-row gap-2'>
      <Link to="/cart">
    <ShoppingBag  className='text-2xl'/>
    </Link>
    <span>{state.cartItems.length}</span>
    </div>
    <Link to="/heart">
  <FaHeart  className='text-2xl'  />
  </Link>
  <Link to="/login">
   <IoPersonCircleSharp  className='text-2xl' />
   </Link>
  </div>
      </div>
</nav>
    </>
  )
}
