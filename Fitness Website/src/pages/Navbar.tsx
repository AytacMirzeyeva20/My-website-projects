import { Link } from "react-router-dom"
function Navbar(){
    return (
 <nav className="bg-pink-300 flex items-center justify-between px-10 py-5">
  <a href="#" className="text-2xl font-bold text-white mr-2">
    EVOGYM
  </a>
  <ul className="md:flex gap-9 items-center text-white list-none font-bold text-lg hidden ">
  <li>
  <a href="#home">Home</a>
</li>
<li>
<a href="#about">About</a>
</li>
<li>
<a href="#classes">Our Classes</a>
</li>
<li>
<a href="#join">Contact Us</a>
</li>
  </ul>
  <div className="flex gap-3">
    <Link to="/register">
    <button className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-pink-300 transition">
      Sign Up
    </button>
    </Link>
    <button className="bg-white text-pink-400 px-5 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition">
      Become a Member
    </button>
  </div>

</nav>
    )
}
export default Navbar