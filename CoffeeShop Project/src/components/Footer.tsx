import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
function Footer(){
    return(
<footer className="bg-[#38251e] pt-20 pb-12 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
    <div>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-amber-900 text-xl">
          ☕
        </div>

        <span className="text-white text-xl font-semibold">
          CoffeeShop
        </span>
      </div>

      <p className="mt-5 text-amber-100/70 text-sm leading-relaxed max-w-xs">
        Artisan coffee roasters dedicated to sourcing, roasting, and
        serving the finest specialty coffees from around the world.
      </p>

      <div className="mt-6 flex items-center gap-4 text-white text-xl">
       <FaInstagramSquare />
        <FaFacebook />
        <IoLogoWhatsapp />
      </div>
    </div>
    <div>
      <h3 className="text-white text-lg font-semibold mb-5">
        Quick Links
      </h3>

      <ul className="space-y-3 text-amber-100/70 text-sm">
        <li>
          <a href="/" className="hover:text-white transition">
            Home
          </a>
        </li>

        <li>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
        </li>

        <li>
          <a href="/menu" className="hover:text-white transition">
            Menu
          </a>
        </li>

        <li>
          <a href="/gallery" className="hover:text-white transition">
            Gallery
          </a>
        </li>

        <li>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-white text-lg font-semibold mb-5">
        Opening Hours
      </h3>

      <div className="space-y-3 text-sm text-amber-100/70">
        <p>Monday - Friday</p>
        <p className="text-white">08:00 AM - 10:00 PM</p>

        <p>Saturday - Sunday</p>
        <p className="text-white">09:00 AM - 11:00 PM</p>
      </div>
    </div>
    <div>
      <h3 className="text-white text-lg font-semibold mb-5">
        Contact Us
      </h3>

      <div className="space-y-4 text-sm text-amber-100/70">

        <div className="flex items-center gap-3">
        <BiLogoGmail className="text-lg" />
          <span>hello@coffeeshop.com</span>
        </div>

        <div className="flex items-center gap-3">
         <FaPhoneAlt className="text-lg"  />
          <span>+994 50 123 45 67</span>
        </div>

        <div className="flex items-start gap-3">
        <MdPlace  className="text-lg"  />
          <span>Baku, Azerbaijan</span>
        </div>

      </div>
    </div>

  </div>

  <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-white/10 text-center">
    <p className="text-amber-100/50 text-sm">
      © 2026 CoffeeShop. All rights reserved.
    </p>
  </div>
</footer>


    )
}
export default Footer;