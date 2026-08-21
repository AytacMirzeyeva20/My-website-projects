import { useCart } from "./context/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";

function Cart() {
  const { cart, dispatch } = useCart();

  const totalQuantity = cart.reduce(
    (total, product) => total + (product.quantity ?? 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * (product.quantity ?? 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f8f6] px-6 py-12">
      <div className="mx-auto max-w-6xl">


        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Your Selection
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-gray-500">
            Review the products you've selected.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
              🛒
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
   
          <div className="space-y-5">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md md:flex-row md:items-center"
              >
  
                <div className="h-28 w-full overflow-hidden rounded-2xl bg-gray-100 md:h-28 md:w-28">
                  {product.thumbnail ? (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {product.category}
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-gray-900">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-lg font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "QUANTITY",
                        payload: product,
                        quantity: Math.max(
                          (product.quantity ?? 1) - 1,
                          1
                        ),
                      })
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
                  >
                    -
                  </button>

                  <span className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-gray-100 px-3 font-semibold text-gray-900">
                    {product.quantity ?? 1}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "QUANTITY",
                        payload: product,
                        quantity: (product.quantity ?? 1) + 1,
                      })
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE",
                      payload: product,
                    })
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white transition hover:bg-red-600 active:scale-95"
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="text-sm text-gray-400">
                  Items in your cart
                </p>

                <span className="text-lg font-semibold text-gray-700">
                  Total Quantity
                </span>
              </div>

              <span className="text-3xl font-bold text-gray-900">
                {totalQuantity}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-lg font-semibold text-gray-700">
                Total Price
              </span>

              <span className="text-3xl font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;