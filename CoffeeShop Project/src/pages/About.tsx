import coffeeVideo from "../video/coffee.mp4";
function About(){
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

        <section id="about" className="bg-amber-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 border border-amber-400 rounded-2xl z-0 hidden md:block" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-950/30">
            <img
              src="https://coffeebusiness.com/wp-content/uploads/2019/08/14tenents-pt2.jpg"
              alt="Qəhvəxananın daxili görünüşü"
              className="w-full h-120 object-cover grayscale-15 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-amber-950/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-amber-950 text-amber-50 rounded-2xl px-6 py-5 shadow-xl hidden sm:block">
            <p className="font-serif text-3xl text-amber-400">15+</p>
            <p className="text-xs uppercase tracking-widest text-amber-100/80">
         Years of Experience
            </p>
          </div>
        </div>

        <div>
          <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-medium">
           Our Story
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-amber-950 mt-4 leading-tight">
            Passion <span className="text-amber-600">in </span> Every Cup
          </h2>

          <p className="mt-6 text-amber-900/80 leading-relaxed">
           Since 2009, CoffeeShop has been carefully selecting the finest coffee beans and crafting every cup with passion and skill. Our goal is not simply to sell coffee — it is to provide every visitor with a warm, welcoming atmosphere that feels like home.

          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="font-serif text-2xl text-amber-950">100%</p>
              <p className="text-sm text-amber-900/70">Natural Beans </p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="font-serif text-2xl text-amber-950">50k+</p>
              <p className="text-sm text-amber-900/70">Satisfied Customer</p>
            </div>
          </div>

          <a
            href="#menu"
            className="inline-block mt-10 bg-amber-950 text-amber-50 uppercase text-sm tracking-widest px-8 py-3 rounded-full transition-all duration-300 hover:bg-amber-800"
          >
       Discover Our Menu
          </a>
        </div>
      </div>
    </section>
        </>
    )
}
export default About