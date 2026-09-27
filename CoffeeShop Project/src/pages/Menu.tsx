import { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  category:string;
  price:number;
};

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
const {dispatch}=useCart();
const[search,setSearch]=useState("");
const[category,setCategory]=useState("All");
const filteredProducts = products.filter((product) =>{
 const ProductSearch=product.title.toLowerCase().includes(search.toLowerCase())
const ProductCategory=category === "All" || product.category === category;

  return ProductSearch && ProductCategory;
});

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate=useNavigate();

  return (
    <section className="min-h-screen bg-[#f7f1e8] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
            Our Menu
          </span>

          <h1 className="font-serif text-5xl font-bold text-[#4a2c20] md:text-6xl">
            Taste the Difference
          </h1>

          <div className="mx-auto mt-5 h-0.5 w-20 bg-[#c99a2e]" />

          <p className="mx-auto mt-6 max-w-2xl text-[#76594c]">
            Discover our carefully crafted selection of premium coffee,
            delicious desserts and unforgettable flavors.
          </p>
        </div>
<div className="mx-auto mb-14 flex max-w-2xl items-center overflow-hidden rounded-2xl border border-[#dbc9b8] bg-white p-1.5 shadow-[0_10px_30px_rgba(74,44,32,0.10)] transition-all duration-300 focus-within:border-[#b8860b] focus-within:shadow-[0_10px_35px_rgba(184,134,11,0.18)]">
  <input type="search" onChange={(product)=>setSearch(product.target.value)} placeholder="Search your favorite coffee..."  className="flex-1 bg-transparent px-5 py-3.5 text-sm text-[#4a2c20] outline-none placeholder:text-[#a58c7d]"/>
  <button className="rounded-xl bg-[#5a3425] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#b8860b] hover:shadow-[0_8px_20px_rgba(184,134,11,0.30)] active:scale-95">
    Search
  </button>
</div>

<div className="mb-14 flex flex-wrap justify-center gap-3">
  <button
  onClick={() => setCategory("All")}
  className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
    category === "All"
      ? "bg-[#5a3425] text-white shadow-lg"
      : "border border-[#d8c9b8] bg-white text-[#5a3425] hover:border-[#b8860b] hover:text-[#b8860b]"
  }`}
>
  All
</button>
  <button
    onClick={() => setCategory("Coffee")}
    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
      category === "Coffee"
        ? "bg-[#5a3425] text-white shadow-lg"
        : "border border-[#d8c9b8] bg-white text-[#5a3425] hover:border-[#b8860b] hover:text-[#b8860b]"
    }`}
  >
    Coffee
  </button>

  <button
    onClick={() => setCategory("Dessert")}
    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
      category === "Dessert"
        ? "bg-[#5a3425] text-white shadow-lg"
        : "border border-[#d8c9b8] bg-white text-[#5a3425] hover:border-[#b8860b] hover:text-[#b8860b]"
    }`}
  >
    Dessert
  </button>

  <button
    onClick={() => setCategory("Drinks")}
    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
      category === "Drinks"
        ? "bg-[#5a3425] text-white shadow-lg"
        : "border border-[#d8c9b8] bg-white text-[#5a3425] hover:border-[#b8860b] hover:text-[#b8860b]"
    }`}
  >
    Drinks
  </button>
</div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-[#dbc9b8] bg-white shadow-[0_15px_40px_rgba(74,44,32,0.10)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(74,44,32,0.18)]">

              <div className="relative h-70 overflow-hidden">
              
                <img onClick={()=>navigate(`/product/${product.id}`)}
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

               <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#3b2118]/70 via-transparent to-transparent opacity-70" />
<button onClick={()=>dispatch({type:"ADD_HEART",payload:product})} className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#8b6f61] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#b8860b] hover:text-white active:scale-95">
  <FaHeart className="text-lg" />
</button>
                <div className="absolute right-4 top-4 rounded-full bg-[#d4a72c] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Premium
                </div>
              </div>

              <div className="p-7">

                <h2 className="font-serif text-2xl font-bold text-[#4a2c20] transition-colors duration-300 group-hover:text-[#b8860b]">
                  {product.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#76594c]">
                  {product.description}
                </p>
<div className="mt-4 flex items-center justify-between">
  <span className="text-xs uppercase tracking-widest text-[#76594c]">
    Price
  </span>

  <span className="text-xl font-bold text-[#b8860b]">
    ${product.price.toFixed(2)}
  </span>
</div>
              <div className="mt-5">
  <button

    onClick={() => { 
      const isLogin=localStorage.getItem("loggedInUser")
      if(!isLogin){
        navigate("/login");
        return;
      }
      dispatch({ type: "ADD", payload: product })
    }}
    className="w-full rounded-xl bg-[#5a3425] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b8860b]"
  >
    Add to Cart
  </button>
</div>
</div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
}

export default Menu;