import { FaShoppingBasket } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { FaHeart } from "react-icons/fa";
function ProductNavbar(){
  const {cart}=useCart();
  const{heart}=useCart()
  const navigate=useNavigate();
    return(
        <>
         <nav className="w-full bg-amber-950 border-b border-amber-800/40 sticky top-0 z-50 shadow-lg shadow-black/30">
          <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
       
          <a
            href="#"
            className="font-serif text-2xl tracking-wide text-amber-50 flex items-center gap-2 group"
          >
            <span className="text-amber-400 text-3xl leading-none group-hover:rotate-12 transition-transform duration-300">
              ☕
            </span>
            <span>
              Coffee <span className="text-amber-400">Shop</span>
            </span>
          </a>
           <ul className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-amber-300">
              <li className="relative group">
               
                 
                
               Home
               
                <span className="absolute left-0 -bottom-2 h-px w-full bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </li>
</Link>
 <Link to="/about" className="text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-amber-300">
               <li className="relative group">
               About
                <span className="absolute left-0 -bottom-2 h-px w-full bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </li>
     </Link>
      <Link to="/menu" className="text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-amber-300">
      <li className="relative group">
               Menu
                <span className="absolute left-0 -bottom-2 h-px w-full bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </li>
</Link>
 <Link to="/gallery" className="text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-amber-300">
 <li className="relative group">
               Gallery
                <span className="absolute left-0 -bottom-2 h-px w-full bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </li>
</Link>
 <Link to="/contact" className="text-white text-sm uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-amber-300">
 <li className="relative group">
               Contact
                <span className="absolute left-0 -bottom-2 h-px w-full bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </li>
</Link>

          </ul>
<div className="flex items-center gap-5 text-white">
  <Link to="/cart" className="flex items-center gap-1.5">
    <FaShoppingBasket size={25} />
    <span className="text-sm font-medium">{cart.length}</span>
  </Link>

  <button
    onClick={() => navigate("/heart")}
    className="flex items-center gap-1.5"
  >
    <FaHeart size={23} />
    <span className="text-sm font-medium">{heart.length}</span>
  </button>

  <button className="flex items-center">
    <Link to="/register">
    <IoPersonCircle size={28} />
    </Link>
  </button>

</div>
         </div>
         </div>
         </nav>
        </>
    )
}
export default ProductNavbar