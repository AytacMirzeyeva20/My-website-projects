import coffeeVideo from "../video/coffee.mp4";
import { useEffect, useState } from "react";
type GalleryItem = {
  src: string;
  title: string;
  note: string;
  id?: number;
};

function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
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



    <section className="min-h-screen w-full bg-[#241409] py-24 px-6 md:px-14 font-[Inter]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-[#8B5A2B]/30 pb-8">
          <div>
            <p className="text-[#E8A33D] text-xs uppercase tracking-[0.35em] mb-4">
              Our Gallery
            </p>
            <h2 className="font-display text-[#F7EDE2] text-4xl md:text-6xl leading-tight max-w-xl">
              From the cup,
              <br />
              <span className="text-[#C9B79C]">to the atmosphere.</span>
            </h2>
          </div>
          <p className="text-[#C9B79C] text-sm leading-6 max-w-sm">
            Every image captures a small part of our daily ritual —
            from carefully selected beans to the warmth of our space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-45 gap-5">

          {gallery.map((item, index) => (
            <div  key={item.id} className={` group relative overflow-hidden rounded-2xl    border border-[#8B5A2B]/20   bg-[#302015]
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                transition-all duration-700
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                ${index === 0 ? "md:col-span-7 md:row-span-2" : ""}
                ${index === 1 ? "md:col-span-5 md:row-span-2" : ""}
                ${index === 2 ? "md:col-span-5 md:row-span-2" : ""}
                ${index === 3 ? "md:col-span-7 md:row-span-2" : ""}
              `} >

              <img
                src={item.src}
                alt={item.title}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-all duration-1000 ease-out
                  group-hover:scale-110
                  group-hover:rotate-1 " />
              <div className="absolute inset-0  bg-linear-to-t  from-[#120a05]/95   via-[#241409]/30  to-transparent
 opacity-70  transition-opacity duration-700 group-hover:opacity-100 "/>

<div  className=" absolute inset-0  bg-linear-to-tr  from-[#E8A33D]/10 via-transparent
 to-transparent  opacity-0    transition-opacity duration-700  group-hover:opacity-100"/>
              <div  className=" absolute inset-3  rounded-xl  border border-transparent
                  transition-all duration-700
                  group-hover:border-[#E8A33D]/60
                  group-hover:inset-4" />

              <div  className="absolute top-5 right-5 w-9 h-9 rounded-full
flex items-center justify-center border border-[#F7EDE2]/30
                  bg-[#241409]/40
                  backdrop-blur-md
                  text-[#F7EDE2]
                  text-xs
                  transition-all duration-500
                  group-hover:bg-[#E8A33D]
                  group-hover:text-[#241409]
                  group-hover:border-[#E8A33D]
                  group-hover:rotate-12
                "
              >
                0{index + 1}
              </div>

              <div
                className="
                  absolute left-0 right-0 bottom-0
                  p-6 md:p-7
                  translate-y-5
                  opacity-0
                  transition-all duration-700 ease-out
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
  <div className="h-0.5 w-10 bg-[#E8A33D] mb-4 transition-all duration-500 group-hover:w-16 "/>

                <h3
                  className="
                    font-display
                    text-[#F7EDE2]
                    text-2xl md:text-3xl
                    tracking-wide
                    mb-2
                  "
                >
                  {item.title}
                </h3>

                <p className="text-[#E8A33D] text-xs uppercase tracking-[0.2em]">
                  {item.note}
                </p>
              </div>
              <div
                className="
                  absolute -left-full top-0
                  h-full w-1/2
                  skew-x-[-20deg]
                  bg-linear-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  transition-all duration-1000
                  group-hover:left-[150%]
                "
              />
            </div>
          ))}

        </div>
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#8B5A2B]/50" />

          <p className="text-[#8B5A2B] text-xs uppercase tracking-[0.3em]">
            Crafted with passion
          </p>

          <div className="h-px w-12 bg-[#8B5A2B]/50" />
        </div>

      </div>
    </section>
    </>
  );
}

export default Gallery;
