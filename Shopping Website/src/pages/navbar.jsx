import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
export default function Navbar() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  }

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
const[menuOpen,setMenu]=useState(false)
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
  {t("Ana səhifə")}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/about" className="py-2 hover:text-amber-400 transition duration-300">
            {t("Haqqımızda")}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/collection" className="py-2 hover:text-amber-400 transition duration-300">
            {t("Kolleksiya")}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/contact" className="py-2 hover:text-amber-400 transition duration-300">
           {t("Əlaqə")}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex gap-10  p-5 text-2xl">
    <button className='text-white rounded-full  shadow-md  cursor-pointer dark:bg-black dark:text-white' onClick={toggleTheme}>{theme==='light' ? <FaMoon/> : <AiFillSun/>} </button>
    </div>
      <select className='border border-amber-50 bg-amber-50 text-black rounded-2xl px-4 py-2'  onChange={(e) => changeLanguage(e.target.value)} >
      <option value="az">AZ</option>
      <option value="en">EN</option>
      <option value="rus">RUS</option>
     </select>
 
 <TiThMenu  className='md:hidden block text-4xl cursor-pointer' onClick={() => setMenu(!menuOpen)}/>
          <div className={` absolute z-50 md:hidden top-20 right-0 w-60  bg-white flex flex-col items-center gap-4 font-semibold text-lg transform transition-transform ${menuOpen ? " max-h-96 opacity-100" :" max-h-0 opacity-0 "}`}
               style={{transition:"transform  0.3s ease, opacity 0.3s ease"}}>
                onClick={() => {
  console.log("click oldu");
  setMenu(!menuOpen);
}}
<li className='list-none w-full text-center p-3 text-black hover:bg-orange-600 hover:text-white cursor-pointer transition-all'>
   <Link to="/">Home</Link>
</li>
<li className='list-none w-full text-center p-3 text-black hover:bg-orange-600 hover:text-white cursor-pointer transition-all'>
   <Link to="/about">About</Link>
</li>
<li className='list-none w-full text-center p-3 text-black  hover:bg-orange-600 hover:text-white cursor-pointer transition-all'>
   <Link to="/collection">Collection</Link>
</li>
<li className='list-none w-full text-center p-3 text-black  hover:bg-orange-600 hover:text-white cursor-pointer transition-all'>
   <Link to="/contact">Contact</Link>
</li>
          </div>
         



  </div>
</nav>
    </>
  )
}