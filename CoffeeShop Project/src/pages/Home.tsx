import coffeeVideo from "../video/coffee.mp4";

function Home(){
    type Product={
            name:string;
           desc:string;
           price:number;
           img:string;
        }
const items:Product[]=[
    {
name: "Espresso",
    desc: "Strong and intense",
    price: 4,
    img: "https://i.pinimg.com/474x/7a/29/df/7a29dfc903d98c6ba13b687ef1fa1d1a.jpg",
    },
    {
name: "Turkish Coffee",
    desc: "Traditional and romantic",
    price: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGywDLxNFfe-xGACPvJ_9oDsw859CC_IJau13NuHxSGT4GL4IHaXsleeTX&s=10",
    },
    {
        name: "Latte",
    desc: "Smooth and milky",
    price: 7 ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxS4unlgva_87vQr5lF3He5hCmg_-xDG88eLvVsxxAWA&s=10",
    },
    {
        name: "Iced Cofee",
    desc: "Cold and Creamy",
    price: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3AKE2lB_47MhSljDZUr-3qFxaHkZ2fXC_9p9VUordZgUk2u-bQSx1MDg&s=10",
    }
]
    
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

   <section id="menu" className="bg-amber-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-xs font-medium">
            Taste & Pleasure
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-amber-50 mt-4">
            Our <span className="text-amber-400">Menu</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl overflow-hidden bg-amber-900/30 border border-amber-800/50 transition-all duration-300 hover:border-amber-400 hover:-translate-y-2"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-amber-950 via-amber-950/10 to-transparent" />
                <span className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.price} $
                </span>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-xl text-amber-50">
                  {item.name}
                </h3>
                <p className="text-amber-200/60 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#full-menu"
            className="border border-amber-400 text-amber-300 uppercase text-sm tracking-widest px-10 py-4 rounded-full transition-all duration-300 hover:bg-amber-400 hover:text-amber-950 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Show Menu
          </a>
        </div>
      </div>
    </section>

<section className="bg-amber-50 py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <span className="text-amber-600 uppercase tracking-[0.3em] text-xs font-medium">
        Testimonials
      </span>

      <h2 className="font-serif text-4xl md:text-5xl text-amber-950 mt-4">
        What People Are Saying
      </h2>

      <p className="text-amber-900/60 mt-4 max-w-md mx-auto">
        Join thousands of happy coffee lovers
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="relative bg-white border border-amber-200 rounded-2xl p-8 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/10 hover:-translate-y-1">

        <span className="absolute top-6 right-7 font-serif text-6xl text-amber-100 select-none leading-none">
          "
        </span>

        <p className="mt-5 text-amber-900/80 leading-relaxed relative z-10">
          The latte here is the best I have ever had in the city.
          The atmosphere is warm, and the staff are incredibly friendly.
          Coming here every morning has become a daily habit.
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-amber-100 pt-5">
          <div className="w-11 h-11 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center font-serif text-sm">
            AM
          </div>

          <div>
            <p className="font-medium text-amber-950">Alex Morgan</p>
            <p className="text-xs text-amber-900/50 uppercase tracking-wide">
              Regular Customer
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white border border-amber-200 rounded-2xl p-8 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/10 hover:-translate-y-1">

        <span className="absolute top-6 right-7 font-serif text-6xl text-amber-100 select-none leading-none">
          "
        </span>

        <p className="mt-5 text-amber-900/80 leading-relaxed relative z-10">
          The coffee is incredibly delicious and the quality is amazing.
          I especially love their cappuccino. It is definitely one of my
          favorite places to enjoy a cup of coffee.
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-amber-100 pt-5">
          <div className="w-11 h-11 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center font-serif text-sm">
            NS
          </div>

          <div>
            <p className="font-medium text-amber-950">Nora Smith</p>
            <p className="text-xs text-amber-900/50 uppercase tracking-wide">
              Coffee Lover
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white border border-amber-200 rounded-2xl p-8 transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-950/10 hover:-translate-y-1">

        <span className="absolute top-6 right-7 font-serif text-6xl text-amber-100 select-none leading-none">
          "
        </span>

        <p className="mt-5 text-amber-900/80 leading-relaxed relative z-10">
          This is one of my favorite places to spend time with friends.
          Great atmosphere, delicious coffee, and wonderful staff.
          I always leave feeling happy and relaxed.
        </p>

        <div className="mt-8 flex items-center gap-4 border-t border-amber-100 pt-5">
          <div className="w-11 h-11 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center font-serif text-sm">
            LA
          </div>

          <div>
            <p className="font-medium text-amber-950">Liam Anderson</p>
            <p className="text-xs text-amber-900/50 uppercase tracking-wide">
              Regular Customer
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        </>
    )
}
export default Home;
