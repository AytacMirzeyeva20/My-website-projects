import { useState } from "react" 
import type { User } from "../auth/Auth"; 
import { Link } from "react-router-dom";
function Register(){ 
const[name,setName]=useState(""); 
const[email,setEmail]=useState(""); 
const[pass,setPass]=useState(""); 
const [confirmPassword, setConfirmPassword] = useState(""); 
const[error,setError]=useState("");
const[success,setSuccess]=useState("");
const handleRegsiter=(e:React.FormEvent<HTMLFormElement>)=>{ 
    e.preventDefault(); 
   setError("");
   setSuccess("");
   if (!name || !email || !pass || !confirmPassword) { 
     setError("Please fill in all fields");
      return; 
    } 
    if(pass !== confirmPassword){ 
        setError("Passwords do not match"); 
        return; 
    } 
   const user: User = { 
      name: name, 
      email: email, 
      password: pass, 
    }; 
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user); 
    setSuccess("Register is successfully");
} 
 
    return ( 
<> 
 <div className="min-h-screen bg-[#fff5f8] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="https://www.katebackdrop.com/cdn/shop/files/ba3a37e34bc7b5423f53f4b1b06194ca.jpg?v=1753259979&width=1000"
            alt="Fitness"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-10 left-10 text-white">
            <p className="uppercase tracking-[4px] text-sm mb-3">
              Welcome Back
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Your journey
              <br />
              starts here.
            </h2>
          </div>
        </div>

        <div className="px-8 py-12 md:px-12 lg:px-16 flex flex-col justify-center">

          <div className="mb-10">
            <p className="text-pink-500 font-semibold tracking-[3px] uppercase text-sm mb-3">
              Fit & Glow
            </p>

            <h1 className="text-4xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-3">
              Sign up to continue your fitness journey.
            </p>
          </div>

          <form onSubmit={handleRegsiter} className="space-y-6">
<div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Full Name
  </label>

  <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full px-5 py-4 rounded-2xl border border-gray-200
    outline-none transition-all duration-300
    focus:border-pink-400 focus:ring-4 focus:ring-pink-100
    placeholder:text-gray-400"
  />
</div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 
                outline-none transition-all duration-300
                focus:border-pink-400 focus:ring-4 focus:ring-pink-100
                placeholder:text-gray-400"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200
                outline-none transition-all duration-300
                focus:border-pink-400 focus:ring-4 focus:ring-pink-100
                placeholder:text-gray-400"
              />
            </div>
<div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Confirm Password
    </label>

    <input
      type="password"
      placeholder="Confirm your password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="w-full px-5 py-4 rounded-2xl border border-gray-200
      outline-none transition-all duration-300
      focus:border-pink-400 focus:ring-4 focus:ring-pink-100
      placeholder:text-gray-400"
    />
  </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 accent-pink-500"
              />

              <span className="text-sm text-gray-500">
                Remember me
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl
              bg-linear-to-r from-pink-500 to-rose-400
              text-white font-semibold text-lg
              shadow-lg shadow-pink-200
              hover:shadow-xl hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300"
            >
              Login
            </button>

          </form>
{error && (
  <p className="mt-4 text-center text-red-500 font-medium">
    {error}
  </p>
)}

{success && (
  <p className="mt-4 text-center text-green-500 font-medium">
    {success}
  </p>
)}
          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-pink-500 font-semibold hover:text-pink-600"
            >
             Back Home
            </Link>
          </p>

        </div>
      </div>
    </div>
</> 
    ) 
} 
export default Register 