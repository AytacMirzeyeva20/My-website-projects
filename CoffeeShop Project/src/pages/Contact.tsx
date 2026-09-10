import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import coffeeVideo from "../video/coffee.mp4";
function Contact(){
    return(
        <>
<section className="relative w-full h-screen overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover" src={coffeeVideo} autoPlay loop muted  playsInline/>
       <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-amber-950/80" />
       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="text-amber-300 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
          Roasted Daily · Brewed With Passion
        </span>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-amber-50 tracking-wide">
          Coffee<span className="text-amber-400">Shop</span>
        </h1>

        <p className="mt-6 max-w-xl text-amber-100/80 text-base md:text-lg">
        A thoughtful story in every cup. Come discover a warm cup of coffee in a quiet corner.

        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="border border-amber-400 text-amber-300 uppercase text-sm tracking-widest px-8 py-3 rounded-full transition-all duration-300 hover:bg-amber-400 hover:text-amber-950"
          >
            Show Menu
          </a>
          <a
            href="#contact"
            className="bg-amber-400 text-amber-950 uppercase text-sm tracking-widest px-8 py-3 rounded-full transition-all duration-300 hover:bg-amber-300"
          >
            Contact Us
          </a>
        </div>
</div>
        </section>
       <section className="relative bg-linear-to-b from-[#2A1810] to-[#1C1108] px-6 py-20 md:py-28">
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#C89666]/40 to-transparent" />
  <div className="mx-auto max-w-5xl">
    <div className="mb-14 text-center">
      <span className="text-sm tracking-wide text-[#C89666]">Bizimlə əlaqə</span>
      <h2 className="mt-3 font-serif text-4xl text-[#F0E4D3] md:text-5xl">
        Bir fincan söhbətə nə deyərsiniz?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#F0E4D3]/60">
        Sualınız, təklifiniz və ya sadəcə salam demək istəyirsiniz — bizə
        yazın, tezliklə cavab veririk.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1px_0.8fr] md:gap-10">
      <form action="" className="rounded-2xl bg-[#F8F4EC] p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] md:p-9">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs text-[#8A7259]">Ad</label>
            <input
              type="text"
              placeholder="Name..."
              className="w-full rounded-lg border border-[#C89666]/30 bg-white px-3.5 py-2.5 text-[15px] text-[#3A2A1C] placeholder:text-[#3A2A1C]/35 outline-none transition-colors focus:border-[#8A5A34]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-[#8A7259]">Surname</label>
            <input
              type="text"
              placeholder="Surname..."
              className="w-full rounded-lg border border-[#C89666]/30 bg-white px-3.5 py-2.5 text-[15px] text-[#3A2A1C] placeholder:text-[#3A2A1C]/35 outline-none transition-colors focus:border-[#8A5A34]"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-xs text-[#8A7259]">Your Phone</label>
          <input
            type="tel"
            placeholder="+994507863423"
            className="w-full rounded-lg border border-[#C89666]/30 bg-white px-3.5 py-2.5 text-[15px] text-[#3A2A1C] placeholder:text-[#3A2A1C]/35 outline-none transition-colors focus:border-[#8A5A34]"
          />
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-xs text-[#8A7259]">Choose</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "teklif", label: "Offer" },
              { id: "sikayet", label: "Complaint" },
              { id: "tovsiye", label: "Recommendation" },
            ].map((opt) => (
              <label
                key={opt.id}
                className="flex cursor-pointer items-center justify-center rounded-lg border border-[#C89666]/30 bg-white px-2 py-2.5 text-[13px] text-[#3A2A1C]/70 transition-colors has-checked:border-[#8A5A34] has-checked:bg-[#8A5A34] has-checked:text-white"
              >
                <input type="radio" name="subject" value={opt.id} className="hidden" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-1.5 block text-xs text-[#8A7259]">Mesaj</label>
          <textarea
            rows={4}
            placeholder="Your Message..."
            className="w-full resize-none rounded-lg border border-[#C89666]/30 bg-white px-3.5 py-2.5 text-[15px] text-[#3A2A1C] placeholder:text-[#3A2A1C]/35 outline-none transition-colors focus:border-[#8A5A34]"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-[#8A5A34] px-8 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#6E4527] md:w-auto"
        >
          Send Message
        </button>
      </form>

      <div className="hidden bg-[#C89666]/20 md:block" />
      <div className="flex flex-col justify-center gap-7">
        <a href="mailto:hello@coffeeshop.com" className="group flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C89666]/40 text-[#C89666] transition-all duration-300 group-hover:border-[#C89666] group-hover:bg-[#C89666] group-hover:text-[#1C1108]">
            <BiLogoGmail className="text-lg" />
          </span>
          <span className="text-[#F0E4D3]/80 transition-colors group-hover:text-[#F0E4D3]">
            hello@coffeeshop.com
          </span>
        </a>

        <a href="tel:+994501234567" className="group flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C89666]/40 text-[#C89666] transition-all duration-300 group-hover:border-[#C89666] group-hover:bg-[#C89666] group-hover:text-[#1C1108]">
            <FaPhoneAlt className="text-base" />
          </span>
          <span className="text-[#F0E4D3]/80 transition-colors group-hover:text-[#F0E4D3]">
            +994 50 123 45 67
          </span>
        </a>

        <div className="group flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C89666]/40 text-[#C89666] transition-all duration-300 group-hover:border-[#C89666] group-hover:bg-[#C89666] group-hover:text-[#1C1108]">
            <MdPlace className="text-lg" />
          </span>
          <span className="text-[#F0E4D3]/80 transition-colors group-hover:text-[#F0E4D3]">
            Baku, Azerbaijan
          </span>
        </div>
      </div>
    </div>
    <div className="mt-16 overflow-hidden rounded-2xl border border-[#C89666]/30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.8295043956323!2d49.835525274796304!3d40.36830465858717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db421b119e9%3A0xff5b11b19c648c27!2sCOFFEESHOP%20Company!5e0!3m2!1saz!2saz!4v1788855264684!5m2!1saz!2saz"
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="grayscale-15 contrast-[1.05]"
      />
    </div>
  </div>
</section>
        </>
    )
}
export default Contact;