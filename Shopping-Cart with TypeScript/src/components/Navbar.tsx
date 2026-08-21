import { FaBasketShopping } from "react-icons/fa6";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";
function Navbar(){
    const {cart}=useCart();
    return(
        <>
       <nav className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-2xl font-bold">Shop</h1>

      <div className="relative">
        <Link to="/cart">
        <FaBasketShopping  size={28} className="mr-9"/>
     
        {cart.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
            {cart.length}
          </span>
        )}
         </Link>
      </div>
     
    </nav>
        </>
    )
}
export default Navbar