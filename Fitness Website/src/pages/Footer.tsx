import { FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdPlace } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#fb9292] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#35151e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#35151e] hover:text-white"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#35151e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#35151e] hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#35151e] transition-all duration-300 hover:-translate-y-1 hover:bg-[#35151e] hover:text-white"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-wide text-[#35151e]">
            FIT<span className="text-white">NESS</span>
          </h2>

          <p className="mt-2 text-xs font-medium text-[#35151e]/80">
            © 2026 Fitness. All rights reserved.
          </p>
        </div>


        <div className="flex flex-col gap-3 text-sm font-medium text-[#35151e]">

          <a
            href="tel:+994501234567"
            className="group flex items-center gap-3 transition-all duration-300 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#35151e] transition group-hover:bg-[#35151e] group-hover:text-white">
              <FaPhoneAlt size={13} />
            </span>

            <span>+994 50 123 45 67</span>
          </a>



          <a
            href="mailto:fitness@gmail.com"
            className="group flex items-center gap-3 transition-all duration-300 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#35151e] transition group-hover:bg-[#35151e] group-hover:text-white">
              <BiLogoGmail size={18} />
            </span>

            <span>fitness@gmail.com</span>
          </a>


   
          <div className="group flex items-center gap-3 text-[#35151e]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#35151e]">
              <MdPlace size={18} />
            </span>

            <span>Baku, Azerbaijan</span>
          </div>

        </div>

      </div>


      <div className="mx-auto mt-8 max-w-7xl border-t border-[#35151e]/15 pt-5 text-center">
        <p className="text-xs text-[#35151e]/70">
          Train hard • Stay strong • Be your best
        </p>
      </div>
    </footer>
  );
}

export default Footer;