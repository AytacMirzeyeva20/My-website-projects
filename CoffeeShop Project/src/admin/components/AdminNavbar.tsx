import { DiCoffeescript } from "react-icons/di";
import { IoSearchSharp } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


function AdminNavbar() {

  return (
   <nav className="sticky top-0 z-50 border-b border-[#c99a6e]/30 bg-[#3a2117]/95 px-6 py-4 shadow-[0_8px_30px_rgba(74,44,32,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
        <div className="flex items-center gap-3 min-w-fit">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.08)]">
            <DiCoffeescript className="text-3xl" />
          </div>
          <div className="leading-tight">
            <h1 className="font-serif text-lg font-semibold tracking-wide text-amber-50">
              Elora{" "}
              <span className="text-amber-400">Coffee</span>
            </h1>

            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-600">
              Admin Panel
            </p>
          </div>

        </div>
      <div className="relative hidden max-w-md flex-1 md:block">

  <IoSearchSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#d4a72c]" />

  <input type="search"  placeholder="Search products, orders..."    className="w-full rounded-xl border border-[#b8860b]/30 bg-[#5a3425] py-3 pl-11 pr-4 text-sm text-[#fff8ed] outline-none transition-all duration-300 placeholder:text-[#d8bfa8] focus:border-[#d4a72c]/70 focus:bg-[#68402d] focus:ring-2 focus:ring-[#d4a72c]/10"/>

</div>
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-[#24130c] shadow-lg shadow-orange-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-amber-400 hover:to-orange-400 hover:shadow-xl hover:shadow-orange-900/30 sm:flex">
            <span className="text-lg leading-none">+</span>
            New
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-800/30 bg-[#291710] text-amber-400 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300"
aria-label="Toggle theme">
            <IoMoonOutline className="text-lg" />
          </button>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-800/30 bg-[#291710] text-amber-400 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300"
            aria-label="Notifications">
            <IoIosNotifications className="text-xl" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-800/30 bg-[#291710] text-amber-400 transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-300"
            aria-label="Settings">
            <IoSettingsOutline className="text-lg transition-transform duration-500 hover:rotate-90" />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default AdminNavbar;

