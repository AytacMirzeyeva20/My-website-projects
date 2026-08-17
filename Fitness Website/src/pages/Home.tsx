import gymImg from "../asset/bg.jpg";

function Home() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${gymImg})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-pink-500/10"></div>

      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center">
        <div className="max-w-7xl mx-auto w-full px-10">
          
          <div className="max-w-xl text-white">
            
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-pink-300">
              Premium Fitness Studio
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Transform
              <span className="block text-pink-300">
                Your Body.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
              Build strength, confidence and a healthier lifestyle
              with EVOGYM.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-pink-400 px-7 py-3 font-bold text-white transition duration-300 hover:bg-pink-500 hover:scale-105">
                Get Started
              </button>

              <button className="rounded-full border border-white/70 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-pink-500">
                Explore Classes
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/20 to-transparent"></div>
    </section>
  );
}

export default Home;