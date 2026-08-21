import { useEffect, useState } from "react"
import { useCart } from "./context/useCart";
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail?: string;
}

function Products() {
  const [product, setProduct] = useState<Product[]>([]);
  const {dispatch}=useCart()
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f6] px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto mb-12 max-w-7xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Our Collection
        </p>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Discover Products
            </h1>

            <p className="mt-3 max-w-xl text-gray-500">
              Explore our carefully selected collection of premium products.
            </p>
          </div>

          <div className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-600 shadow-sm">
            {product.length} Products
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((products) => (
          <div
            key={products.id}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              {products.thumbnail ? (
                <img
                  src={products.thumbnail}
                  alt={products.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              <div className="absolute left-4 top-4 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
                -{Math.round(products.discountPercentage)}%
              </div>


              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur">
                ★ {products.rating}
              </div>
            </div>

            <div className="p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {products.category}
              </p>

              <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-gray-900">
                {products.title}
              </h2>

              <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
                {products.description}
              </p>

      
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${products.price}
                  </span>

                  <span className="ml-2 text-sm text-gray-400 line-through">
                    $
                    {(
                      products.price /
                      (1 - products.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                </div>

                <span className="text-xs text-gray-400">
                  {products.stock} left
                </span>
              </div>

  
              <button onClick={()=>dispatch({
                type:"ADD",
                payload:products,
              })}
                className="w-full rounded-2xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-800 active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;