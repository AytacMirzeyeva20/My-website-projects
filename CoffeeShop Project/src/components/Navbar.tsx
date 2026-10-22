import { Link } from "react-router-dom"; 
import { IoSunny } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { DiCoffeescript } from "react-icons/di";
import { FaMoon } from "react-icons/fa6";
import { useState } from "react";
import {useTranslation} from 'react-i18next';
import { IoIosMenu} from "react-icons/io";
function Navbar() {
  const [darkmode, setDarkmode] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => {
    setDarkmode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-800/40 bg-amber-950 text-white shadow-lg shadow-black/30 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2 font-serif text-xl tracking-wide text-amber-50 sm:text-2xl"
          >
            <span className="text-3xl leading-none text-amber-400 transition-transform duration-300 group-hover:rotate-12">
              <DiCoffeescript />
            </span>

            <span>
              Elora <span className="text-amber-400">Coffee</span>
            </span>
          </Link>
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="group relative text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:text-amber-300"
                >
                  {t(item.label)}

                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <div className="relative">
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                aria-label="Select language"
                className="w-23.75 cursor-pointer appearance-none rounded-full border border-amber-700/50 bg-amber-900/60 px-2 py-2 pr-6 text-xs text-amber-50 outline-none hover:border-amber-400 focus:border-amber-400 sm:w-30 sm:px-4 sm:pr-8 sm:text-sm">
                <option value="en" className="bg-amber-950 text-white">
                  English
                </option>
                <option value="az" className="bg-amber-950 text-white">
                  Azerbaijan
                </option>
                <option value="ru" className="bg-amber-950 text-white">
                  Russian
                </option>
              </select>

              <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-amber-400 sm:right-3" />
            </div>

            <button
              onClick={toggleDarkMode}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/60 text-amber-300 transition-all duration-300 hover:rotate-12 hover:border-amber-400 hover:bg-amber-400 hover:text-amber-950 sm:h-10 sm:w-10"
              aria-label="Toggle theme"
            >
              {darkmode ? <FaMoon /> : <IoSunny />}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-700/50 text-amber-100 transition-colors duration-300 hover:border-amber-400 hover:bg-amber-900 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <IoIosMenu className="text-3xl" />
            </button>
          </div>

          <Link
            to="/menu"
            className="hidden rounded-full border border-amber-400 px-5 py-2 text-sm uppercase tracking-widest text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-amber-950 lg:inline-block"
          >
            {t("Order Now")}
          </Link>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-1 border-t border-amber-800/60 py-3">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-widest text-amber-100 transition-colors duration-200 hover:bg-amber-900 hover:text-amber-300"
                  >
                    {t(item.label)}
                    <span className="text-amber-500">↗</span>
                  </Link>
                </li>
              ))}

              <li className="pt-3">
                <Link
                  to="/menu"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold uppercase tracking-widest text-amber-950 transition-colors duration-300 hover:bg-amber-300"
                >
                  {t("Order Now")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;