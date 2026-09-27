import { DiCoffeescript } from "react-icons/di";
import { IoMenu } from "react-icons/io5";
import { MdDashboard, MdAnalytics, MdPeople, MdShoppingBag,MdMessage, MdSettings,} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Sidebar() {
  const navigate=useNavigate();
    const[menu,menuOpen]=useState(false);
  return (
    <>
     <section
  className={`fixed left-0 top-0 z-50 h-screen border-r border-[#eadfd4] bg-white shadow-[10px_0_35px_rgba(74,44,32,0.06)] transition-all duration-300 ${
    menu ? "w-72" : "w-20"
  }`}
>
        <div className="flex h-24 items-center justify-between border-b border-[#f0e7df] px-6">

          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-3xl transition-transform duration-300 hover:rotate-12">
              <DiCoffeescript />
            </span>

          {menu && (
  <div>
    <h1 className="font-serif text-xl font-bold tracking-wide text-[#4a2c20]">
      Elora <span className="text-[#b8860b]">Coffee</span>
    </h1>

    <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-[#9a8477]">
      Admin Panel
    </p>
  </div>
  )}
          </div>

          <button onClick={()=>menuOpen(prev=>!prev)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#eadfd4] text-[#5a3425] transition-all duration-300 hover:border-[#b8860b] hover:bg-[#fff8ed] hover:text-[#b8860b]">
            <IoMenu className="text-xl" />
          </button>

        </div>

        <div className="px-4 py-7">

          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b5a196]">
            Main Menu
          </p>

          <ul className="space-y-2">

            <li>
              <button onClick={()=>navigate("/admin")}  className="group flex w-full items-center gap-4 rounded-xl bg-[#5a3425] px-4 py-3.5 text-left text-sm font-medium text-white shadow-[0_8px_20px_rgba(90,52,37,0.18)] transition-all duration-300">
                <MdDashboard className="text-xl text-[#d4a72c]" />
               
              {menu && <span>Dashboard</span>}
              </button>
            </li>

            <li>
              <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-[#6d574b] transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#5a3425]">
                <MdAnalytics className="text-xl text-[#b8860b] transition-transform group-hover:scale-110" />
             {menu && <span>Analytics</span>}
              </button>
            </li>

            <li>
              <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-[#6d574b] transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#5a3425]">
                <MdPeople className="text-xl text-[#b8860b] transition-transform group-hover:scale-110" />
               {menu && <span>Users</span>}
              </button>
            </li>

            <li>
              <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-[#6d574b] transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#5a3425]">
                <MdShoppingBag className="text-xl text-[#b8860b] transition-transform group-hover:scale-110" />
                {menu && <span>E-commerce</span>}
              </button>
            </li>

            <li>
              <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-[#6d574b] transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#5a3425]">
                <MdMessage className="text-xl text-[#b8860b] transition-transform group-hover:scale-110" />
               {menu && <span>Messages</span>}

                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d4a72c] px-1.5 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
            </li>

            <li>
              <button className="group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-[#6d574b] transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#5a3425]">
                <MdSettings className="text-xl text-[#b8860b] transition-transform duration-300 group-hover:rotate-45" />
              {menu && <span>Settings</span>}
              </button>
            </li>

          </ul>
        </div>

        <div className="absolute bottom-6 left-4 right-4 rounded-2xl border border-[#eadfd4] bg-[#fffaf4] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5a3425] text-sm font-bold text-[#d4a72c]">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#4a2c20]">
                Admin
              </p>

              <p className="truncate text-xs text-[#9a8477]">
                Elora Coffee
              </p>
            </div>

            <span className="ml-auto h-2 w-2 rounded-full bg-green-500" />

          </div>

        </div>

      </section>
    </>
  );
}

export default Sidebar;