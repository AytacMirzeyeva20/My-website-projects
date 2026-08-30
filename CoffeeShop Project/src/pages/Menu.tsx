import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  price:string;
};

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-[#dbc9b8] bg-white shadow-[0_15px_40px_rgba(74,44,32,0.10)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(74,44,32,0.18)]">

              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#3b2118]/70 via-transparent to-transparent opacity-70" />

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

                <div className="mt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                    Ingredients
                  </p>

                  <p className="text-sm text-[#65483b]">
                    {product.ingredients.join(" • ")}
                  </p>
                  <div className="flex gap-3">
                    <span className="mt-3 font-bold" >Price:</span>
                  <p className="mt-3 font-bold text-amber-500">{product.price}</p>
                </div>
                </div>
                <div className="my-6 h-px bg-[#eadfd3]" />

                <button
                  className="w-full rounded-xl bg-[#5a3425] px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#b8860b] hover:shadow-lg active:scale-95"
                  onClick={() => console.log("Added:", product.title)} >
                  <span className="flex items-center justify-center gap-2">
                    Add to Cart
                  </span>
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Menu;