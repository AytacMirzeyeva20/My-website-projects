import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  price: number;
};

function ProductDetails() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
const {id}=useParams();
  return (
    <>
      <section className="min-h-screen bg-[#f7f1e8] px-6 py-16 md:px-12 lg:px-20">
        {products.filter((product) => product.id.toString() === id)
    .map((product) =>(
          <div
            key={product.id}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-125 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
                Coffee Collection
              </p>

              <h1 className="text-4xl font-bold text-[#4a2c20] md:text-5xl">
                {product.title}
              </h1>

              <div className="mt-5 h-px w-20 bg-[#b8860b]" />

              <p className="mt-6 max-w-xl text-base leading-7 text-[#76594c]">
                {product.description}
              </p>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#4a2c20]">
                  Ingredients
                </h2>

                <ul className="mt-3 space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-[#76594c]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between border-y border-[#d8c9b8] py-5">
                <span className="text-sm uppercase tracking-widest text-[#76594c]">
                  Price
                </span>

                <span className="text-2xl font-bold text-[#b8860b]">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button className="mt-7 w-full rounded-xl bg-[#5a3425] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:bg-[#b8860b]">
                Add to Cart
              </button>

              <a
                href="/menu"
                className="mt-4 text-center text-sm font-medium text-[#76594c] transition hover:text-[#b8860b]"
              >
                ← Back to Menu
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ProductDetails;