import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../context/CartContext';

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    pass: ""
  });

  const [showpass, setShowpass] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useCart();

  const togglePassword = () => {
    setShowpass(prev => !prev);
  };

  const addUser = (e) => {
    e.preventDefault();

    if (!user.name || !user.surname || !user.email || !user.pass) {
      alert("Please fill in all fields");
      return;
    }

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    toast.success('🦄 Successfully logged in!', {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });

    setTimeout(() => {
      // ✅ USER SAVE (ƏN VACİB HİSSƏ)
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ pending cart check
      const pendingProduct = localStorage.getItem("pendingCart");

      if (pendingProduct) {
        dispatch({
          type: "ADD",
          payload: JSON.parse(pendingProduct)
        });

        localStorage.removeItem("pendingCart");
      }

      navigate("/products");
    }, 3000);
  };

  return (
    <>
     <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800 text-white">
         <form
         className="relative max-w-md rounded-4xl border border-white/10 bg-white/10 p-8  mt-5 mb-6.25 shadow-2xl backdrop-blur-xl md:w-1/2 lg:w-2/5"
         onSubmit={addUser}
       >
           <div className="mb-8">
             <p className="text-sm uppercase tracking-[0.3em] text-pink-600"> Account</p>
             <h1 className="mt-4 text-4xl font-extrabold text-white">Login</h1>
             <p className="mt-3 text-sm text-white/70">Login to start your next travel adventure with us.</p>
           </div>
     
           <div className="space-y-4">
             <label className="block">
               <span className="mb-2 text-sm font-semibold text-white/80">Adınız</span>
               <input
                 type="text"
                 placeholder="Adınız"
                 value={user.name}
                 onChange={(e) => setUser({ ...user, name: e.target.value })}
                 className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200/20"
               />
             </label>
     
             <label className="block">
               <span className="mb-2 text-sm font-semibold text-white/80">Soyadınız</span>
               <input
                 type="text"
                 placeholder="Soyadınız"
                 value={user.surname}
                 onChange={(e) => setUser({ ...user, surname: e.target.value })}
                 className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200/20"
               />
             </label>
     
             <label className="block">
               <span className="mb-2 text-sm font-semibold text-white/80">Email</span>
               <input
                 type="email"
                 placeholder="you@example.com"
                 value={user.email}
                 onChange={(e) => setUser({ ...user, email: e.target.value })}
                 className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200/20"
               />
             </label>
     
             <label className="relative block">
               <span className="mb-2 text-sm font-semibold text-white/80">Şifrə</span>
               <input
                 type={showpass ? 'text' : 'password'}
                 placeholder="Şifrə"
                 value={user.pass}
                 onChange={(e) => setUser({ ...user, pass: e.target.value })}
                 className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 pr-12 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-200/20"
               />
               <button
                 type="button"
                 onClick={togglePassword}
                 className="absolute right-5 top-1/2 -translate-y-1/6 text-white/70 hover:text-white"
               >
                 {showpass ? <IoEyeOff /> : <FaEye />}
               </button>
             </label>
           </div>
     
           <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
             <label className="flex items-center gap-2 text-sm text-white/70">
               <input type="checkbox" className="rounded border-white/30 bg-white/5 text-cyan-400 focus:ring-cyan-300" />
               Remember me
             </label>
             <Link to="/register" className="text-sm font-semibold text-pink-600 hover:text-white">l haven't account</Link>
           </div>
     
           <button
             type="submit"
             className="mt-8 w-full rounded-3xl bg-pink-600  px-6 py-3 text-lg font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
           >
             Log in
           </button>
     
           <p className="mt-6 text-center text-sm text-white/60">
             Or return to
             <Link to="/" className="ml-1 font-semibold text-pink-600 hover:text-white">Home</Link>
           </p>
         </form>
       </div>
    </>
  );
}