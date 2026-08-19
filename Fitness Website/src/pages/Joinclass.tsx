function Joinclass(){
    return (
        <>
        <section className="w-full bg-white py-10 md:py-16" id="join">
      <div className="mx-auto grid w-[84%] max-w-362.5 grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr]">
    
        <div>
          <h2 className="mb-4 text-[26px] font-extrabold tracking-tight text-[#35151e] md:text-[34px]">
            <span className="text-[#ef6267]">JOIN NOW</span> TO GET IN SHAPE
          </h2>

          <p className="mb-9 max-w-225 text-sm font-medium leading-6 text-[#35151e] md:text-base">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat
            nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>

          <form className="w-full">

            <input
              type="text"
              placeholder="NAME"
              className="mb-5 h-12 w-full rounded-lg border-none bg-[#fb9292] px-5 text-sm text-white outline-none placeholder:text-white focus:ring-2 focus:ring-[#ef6267]/30"
            />

            <input
              type="email"
              placeholder="EMAIL"
              className="mb-5 h-12 w-full rounded-lg border-none bg-[#fb9292] px-5 text-sm text-white outline-none placeholder:text-white focus:ring-2 focus:ring-[#ef6267]/30"
            />

    
            <textarea
              placeholder="MESSAGE"
              className="mb-5 h-30 w-full resize-y rounded-lg border-none bg-[#fb9292] px-5 py-4.5 text-sm text-white outline-none placeholder:text-white focus:ring-2 focus:ring-[#ef6267]/30"/>

            <button
              type="submit"
              className="mt-5 h-12.5 w-53.75 rounded-lg bg-[#ffb51b] text-sm font-bold text-[#2d1619] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ef6267] hover:text-white">
              SUBMIT
            </button>
          </form>
        </div>

      
        <div className="h-100 overflow-hidden rounded-lg bg-[#fce2d5] sm:h-125 lg:h-147.5">
          <img
            src="https://media.istockphoto.com/id/1163716088/photo/fitness-woman-model-in-fashion-sportswear-on-pink-background.jpg?s=612x612&w=0&k=20&c=hT111hcetEqyH-Vw_UYEM_-d2U0DmiiQlY1n7iaDdlY="
            alt="Fitness woman"
            className="h-full w-full object-cover object-center"
          />
        </div>

      </div>
    </section>
        </>
    )
}
export default Joinclass