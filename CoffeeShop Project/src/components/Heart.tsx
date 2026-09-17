import { useCart } from "../context/useCart";
import { FaHeart } from "react-icons/fa6";

function Heart() {
  const { heart, dispatch } = useCart();

  return (
    <section className="min-h-screen bg-[#f7f1e8] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
            Favorites
          </span>
          <h1 className="font-serif text-5xl font-bold text-[#4a2c20] md:text-6xl">
            Your Favorite Coffee
          </h1>
          <div className="mx-auto mt-5 h-0.5 w-20 bg-[#c99a2e]" />
          <p className="mx-auto mt-6 max-w-2xl text-[#76594c]">
            Your favorite flavors, saved in one beautiful place.
          </p>
        </div>
        {heart.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-[#dbc9b8] bg-white px-6 text-center shadow-[0_15px_40px_rgba(74,44,32,0.10)]">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f7f1e8]">
              <FaHeart className="text-3xl text-[#b8860b]" />
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#4a2c20]">
              No Favorites Yet
            </h2>

            <p className="mt-3 max-w-md text-[#76594c]">
              Start exploring our menu and save the coffees and desserts
              you love.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {heart.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-[#dbc9b8] bg-white shadow-[0_15px_40px_rgba(74,44,32,0.10)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(74,44,32,0.18)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                  <div className="absolute inset-0 bg-linear-to-t from-[#3b2118]/70 via-transparent to-transparent opacity-70" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#b8860b] shadow-lg backdrop-blur-sm">
                    <FaHeart className="text-lg" />
                  </div>

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

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-xl font-bold text-[#b8860b]">
                      ${product.price}
                    </span>

                    <button onClick={()=>dispatch({type:"REMOVE_HEART",payload:product})} className="rounded-xl border border-[#dbc9b8] px-5 py-2.5 text-sm font-semibold text-[#76594c] transition-all duration-300 hover:border-[#b8860b] hover:bg-[#b8860b] hover:text-white">
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Heart;

