
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "aytac" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f1e8] p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-center text-3xl font-bold text-[#4a2c20]">
          Admin Login
        </h1>

        <p className="mb-8 mt-2 text-center text-[#9a8477]">
          Sign in to manage your coffee shop.
        </p>

        <label className="mb-2 block text-[#4a2c20]">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="mb-5 w-full rounded-lg border border-[#d8c7b9] p-3 outline-none focus:border-[#8b5e3c]"
          required
        />

        <label className="mb-2 block text-[#4a2c20]">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="mb-4 w-full rounded-lg border border-[#d8c7b9] p-3 outline-none focus:border-[#8b5e3c]"
          required
        />

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#4a2c20] py-3 font-semibold text-white transition hover:bg-[#6b4030]"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
