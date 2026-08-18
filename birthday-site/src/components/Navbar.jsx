import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { img } from '../assets/imageMap.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/cake-shop', label: 'Cake Shop' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-premium' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={img('logo.jpg')} alt="Velvet & Gold logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-400" />
          <span className="font-display text-lg font-bold tracking-wide text-royal-800">
            Velvet <span className="text-gold-600">&amp;</span> Gold
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative text-sm font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? 'text-gold-600 after:w-full' : 'text-royal-800 hover:text-gold-600'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/book-now" className="btn-gold hidden lg:inline-flex">
          Book Now
        </NavLink>

        <button
          aria-label="Menyunu aç"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-7 bg-royal-800 transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-7 bg-royal-800 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-7 bg-royal-800 transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`glass overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  isActive ? 'bg-royal-100 text-gold-600' : 'text-royal-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/book-now" onClick={() => setOpen(false)} className="btn-gold mt-2 justify-center">
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
