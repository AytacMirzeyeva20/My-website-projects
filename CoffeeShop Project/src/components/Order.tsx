import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
function Order() {
    const[formData,setFormData]=useState({
        name:"",phone:"",email:"",address:"",message:"",
    });
    const { cart,dispatch } = useCart();
    const navigate=useNavigate();
    const[error,setError]=useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit=(e: React.FormEvent)=>{
e.preventDefault();
if (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.address
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  setError("");
  const order = {
  id: Date.now(),
  customer: formData,
  products: cart,
};
const existingOrders = JSON.parse(
  localStorage.getItem("orders") || "[]"
);
localStorage.setItem(
  "orders",
  JSON.stringify([...existingOrders, order])
);
   setSuccess("Order confirmed successfully!");
console.log(order);
dispatch({
      type: "SUBMIT",
    });
    setTimeout(()=>{
        navigate("/menu");
    },5000)
    }
 
  return (
    <section className="min-h-screen bg-[#f7f1e8] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
            Almost There
          </span>

          <h1 className="mt-3 font-serif text-5xl font-bold text-[#4a2c20] md:text-6xl">
            Complete Your Order
          </h1>

          <div className="mx-auto mt-5 h-0.5 w-20 bg-[#c99a2e]" />

          <p className="mx-auto mt-6 max-w-xl text-[#76594c]">
            Please enter your details below to complete your coffee order.
          </p>
        </div>
        <form  onSubmit={handleSubmit} className="rounded-3xl border border-[#dbc9b8] bg-white p-8 shadow-[0_15px_40px_rgba(74,44,32,0.10)] md:p-10">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c20]">
                Full Name
              </label>

              <input value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#dbc9b8] bg-[#f7f1e8] px-4 py-3.5 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c20]">
                Contact Number
              </label>

              <input value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-[#dbc9b8] bg-[#f7f1e8] px-4 py-3.5 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c20]">
                Email Address
              </label>

              <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#dbc9b8] bg-[#f7f1e8] px-4 py-3.5 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c20]">
                Street Address
              </label>

              <input value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})}
                type="text"
                placeholder="Enter your address"
                className="w-full rounded-xl border border-[#dbc9b8] bg-[#f7f1e8] px-4 py-3.5 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-[#4a2c20]">
              Message
            </label>

            <textarea value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})}
              placeholder="Any special instructions?"
              rows={5}
              className="w-full resize-none rounded-xl border border-[#dbc9b8] bg-[#f7f1e8] px-4 py-3.5 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/20"
            />
          </div>
{error && (
    <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-500"> 
    {error}
    </p>
)}
          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-[#5a3425] px-6 py-4 font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#b8860b] active:scale-95"
          >
            Confirm Order
          </button>
{success && (
  <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-600">
    {success}
  </p>
)}
        </form>
      </div>
    </section>
  );
}

export default Order;