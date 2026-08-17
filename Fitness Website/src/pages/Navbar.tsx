function Navbar(){
    return (
 <nav className="bg-pink-300 flex items-center justify-between px-10 py-5">
  <a href="#" className="text-2xl font-bold text-white">
    EVOGYM
  </a>
  <ul className="flex gap-9 items-center text-white list-none font-bold text-lg">
    <li>Home</li>
    <li>About</li>
    <li>Our Classes</li>
    <li>Contact Us</li>
  </ul>
  <div className="flex gap-3">
    <button className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-pink-300 transition">
      Sign In
    </button>
    <button className="bg-white text-pink-400 px-5 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition">
      Become a Member
    </button>
  </div>

</nav>
    )
}
export default Navbar