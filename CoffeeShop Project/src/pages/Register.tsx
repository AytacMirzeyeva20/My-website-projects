function Register(){
    return(
        <>
<section className="min-h-screen bg-[#f7f1e8] flex items-center justify-center px-6 py-16">
  <div className="w-full max-w-5xl grid md:grid-cols-2 bg-amber-950 rounded-3xl overflow-hidden shadow-2xl">
    <div className="hidden md:flex relative bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center">
      <div className="absolute inset-0 bg-amber-950/75"></div>
      <div className="relative z-10 flex flex-col justify-center px-12 text-amber-50">
        <span className="text-amber-400 text-5xl mb-5">☕</span>
        <p className="uppercase tracking-[0.3em] text-sm text-amber-300 mb-4">
          Welcome to CoffeeShop
        </p>
        <h2 className="font-serif text-4xl leading-tight mb-5">
          Your perfect coffee
          <br />
          <span className="text-amber-400">starts here.</span>
        </h2>
        <p className="text-amber-100/70 leading-relaxed max-w-sm">
          Create your account and enjoy a warm,
          beautiful coffee experience with us.
        </p>
      </div>
    </div>
    <div className="bg-white px-8 py-10 md:px-12 md:py-12">
      <div className="mb-8">
        <p className="text-amber-700 uppercase tracking-[0.25em] text-xs font-semibold mb-2">
          Create Account
        </p>
        <h1 className="font-serif text-4xl text-amber-950">
          Register
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Join our coffee community today.
        </p>
      </div>
      <form action="" className="space-y-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-amber-950 mb-2">
            First Name
          </label>

          <input  id="firstName" type="text" placeholder="Enter your name..." className="w-full  bg-[#faf7f2] border border-amber-900/15 rounded-xl px-4 py-3 text-amber-950 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-amber-950 mb-2">
            Last Name
          </label>

          <input
            id="lastName"
            type="text"
            placeholder="Enter your surname..."
            className="
              w-full
              bg-[#faf7f2]
              border
              border-amber-900/15
              rounded-xl
              px-4
              py-3
              text-amber-950
              placeholder:text-gray-400
              outline-none
              transition-all
              duration-300
              focus:border-amber-600
              focus:ring-2
              focus:ring-amber-600/10
            "
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-950 mb-2">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your email..."
            className="
              w-full
              bg-[#faf7f2]
              border
              border-amber-900/15
              rounded-xl
              px-4
              py-3
              text-amber-950
              placeholder:text-gray-400
              outline-none
              transition-all
              duration-300
              focus:border-amber-600
              focus:ring-2
              focus:ring-amber-600/10
            "
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-amber-950 mb-2">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Your password..."
            className="
              w-full
              bg-[#faf7f2]
              border
              border-amber-900/15
              rounded-xl
              px-4
              py-3
              text-amber-950
              placeholder:text-gray-400
              outline-none
              transition-all
              duration-300
              focus:border-amber-600
              focus:ring-2
              focus:ring-amber-600/10
            "
          />
        </div>
        <div className="flex items-center justify-between pt-1">

          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
            <input
              type="checkbox"
              className="w-4 h-4 accent-amber-700 cursor-pointer"
            />

            <span>Remember me</span>
          </label>

          <a
            href="#"
            className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
          >
            Forgot password?
          </a>

        </div>

        <div className="flex items-center gap-3 pt-3">

          <button
            type="submit"
            className="
              flex-1
              bg-amber-950
              text-amber-50
              py-3
              rounded-xl
              uppercase
              tracking-widest
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-amber-800
              hover:shadow-lg
              hover:shadow-amber-950/20
            "
          >
            Register
          </button>

          <a
            href="#"
            className="
              flex-1
              text-center
              border
              border-amber-800
              text-amber-800
              py-3
              rounded-xl
              uppercase
              tracking-widest
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-amber-800
              hover:text-white
            "
          >
            Log In
          </a>

        </div>

      </form>

    </div>

  </div>

</section>

        </>
    )
}
export default Register