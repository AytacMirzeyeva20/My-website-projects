import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
function Navbar(){
    return(
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
<div className="flex items-center gap-3">
  <div className="relative">
    <select className="appearance-none bg-amber-900/60 border border-amber-700/50 text-amber-50 text-sm font-medium px-4 py-2 pr-9 rounded-full outline-none cursor-pointer transition-all  duration-300 hover:border-amber-400 hover:bg-amber-900 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50">
      <option className="bg-amber-950 text-white">English</option>
      <option className="bg-amber-950 text-white">Azerbaijan</option>
      <option className="bg-amber-950 text-white">Russian</option>
    </select>
    <span className=" pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 text-xs "> 
    <IoIosArrowDown />
     </span>
  </div>
  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-amber-700/50 bg-amber-900/60 text-amber-300 transition-all
 duration-300  hover:bg-amber-400  hover:text-amber-950  hover:border-amber-400 hover:rotate-12 hover:shadow-lg hover:shadow-amber-400/20" aria-label="Toggle theme">
    <IoSunny className="text-lg" />
  </button>
</div>
         <Link to="/menu" className="hidden md:inline-block border border-amber-400 text-amber-300 text-sm uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-300 hover:bg-amber-400 hover:text-amber-950">
            Order Now
          </Link>
          <button className="md:hidden text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded p-1" aria-label="Toggle menu">
          </button>
        </div>
        </div>
     </nav>
    )
}
export default Navbar;