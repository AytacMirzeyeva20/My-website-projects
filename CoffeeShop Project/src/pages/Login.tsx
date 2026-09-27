import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate=useNavigate();
  const handleLogin=async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (!email || !password) {
    setError("Please fill in all fields");
    setSuccess("");
    return;
  }
  const response = await fetch("http://localhost:3000/user");
  const users = await response.json();

const user = users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password
  );
   if (!user) {
    setError("Invalid email or password");
    setSuccess("");
    return;
  }
localStorage.setItem("loggedInUser", JSON.stringify(user));
  setError("");
setSuccess("Login is successful!");
navigate("/menu");
  console.log(user);
};
  return (
    <>
      <section className="min-h-screen bg-[#f7f1e8] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-5xl grid md:grid-cols-2 bg-amber-950 rounded-3xl overflow-hidden shadow-2xl">
          <div className="hidden md:flex relative bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center">
            <div className="absolute inset-0 bg-amber-950/75"></div>

            <div className="relative z-10 flex flex-col justify-center px-12 text-amber-50">
              <span className="text-5xl mb-5">☕</span>

              <p className="uppercase tracking-[0.3em] text-sm text-amber-300 mb-4">
                Welcome Back
              </p>

              <h2 className="font-serif text-4xl leading-tight mb-5">
                Your coffee
                <br />
                <span className="text-amber-400">is waiting.</span>
              </h2>

              <p className="text-amber-100/70 leading-relaxed max-w-sm">
                Log in to continue your coffee journey and enjoy
                your favorite drinks with us.
              </p>
            </div>
          </div>

          <div className="bg-white px-8 py-10 md:px-12 md:py-16">
            <div className="mb-10">
              <p className="text-amber-700 uppercase tracking-[0.25em] text-xs font-semibold mb-2">
                Welcome Back
              </p>
              <h1 className="font-serif text-4xl text-amber-950">
                Log In
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Sign in to continue to your account.
              </p>
            </div>

            <form onSubmit={handleLogin}  className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-950 mb-2"
                >
                  Email
                </label>

                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email"
                  placeholder="Your email..."
                  className="w-full bg-[#faf7f2] border border-amber-900/15 rounded-xl px-4 py-3 text-amber-950 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"/>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-amber-950 mb-2"
                >
                  Password
                </label>

                <input value={password} onChange={(e) => setPassword(e.target.value)}  id="password" type="password"
 placeholder="Your password..."  className="w-full bg-[#faf7f2] border border-amber-900/15 rounded-xl px-4 py-3 text-amber-950 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/10"/>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                  <input checked={rememberMe}
  onChange={(e) => setRememberMe(e.target.checked)}
                    type="checkbox"
                    className="w-4 h-4 accent-amber-700 cursor-pointer"
                  />

                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Forgot password?
                </button>

              </div>
              <button type="submit" className="w-full bg-amber-950 text-amber-50 py-3 rounded-xl uppercase tracking-widest text-sm font-medium transition-all duration-300 hover:bg-amber-800 hover:shadow-lg hover:shadow-amber-950/20">
                Log In
              </button>
  {error &&(
<p className="text-red-600 text-sm">{error}</p>
 )}
 {success && (
  <p className="text-green-600 text-sm">{success}</p>
 )}
              <div className="text-center pt-3">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-amber-700 font-medium hover:text-amber-900 transition-colors"
                  >
                    Create Account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
