import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (total, product) =>
      total + Number(product.price) * (product.quantity || 1),
    0
  );

  const increaseQuantity = (product: (typeof cart)[number]) => {
    dispatch({
      type: "QUANTITY",
      payload: product,
      quantity: (product.quantity || 1) + 1,
    });
  };

  const decreaseQuantity = (product: (typeof cart)[number]) => {
    const currentQuantity = product.quantity || 1;

    if (currentQuantity === 1) {
      dispatch({
        type: "REMOVE",
        payload: product,
      });
      return;
    }

    dispatch({
      type: "QUANTITY",
      payload: product,
      quantity: currentQuantity - 1,
    });
  };

  const removeProduct = (product: (typeof cart)[number]) => {
    dispatch({
      type: "REMOVE",
      payload: product,
    });
  };

  return (
    <section className="min-h-screen bg-[#f7f1e8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
            Your Selection
          </span>
          <h1 className="mt-3 font-serif text-5xl font-bold text-[#4a2c20] md:text-6xl">
            Your Cart
          </h1>
          <div className="mx-auto mt-5 h-0.5 w-20 bg-[#c99a2e]" />
          <p className="mx-auto mt-6 max-w-xl text-[#76594c]">
            Review your favorite coffee and treats before placing your order.
          </p>
        </div>
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-[#dbc9b8] bg-white px-6 py-20 text-center shadow-[0_15px_40px_rgba(74,44,32,0.10)]">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f7f1e8] text-5xl">
              ☕
            </div>

            <h2 className="mt-7 font-serif text-3xl font-bold text-[#4a2c20]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[#76594c]">
              Looks like you haven't added anything yet. Discover something
              delicious from our menu.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#5a3425] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#b8860b] hover:-translate-y-1"
            >
              <FaArrowLeft size={14} />
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            <div className="space-y-5">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-3xl border border-[#dbc9b8] bg-white p-5 shadow-[0_12px_35px_rgba(74,44,32,0.08)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(74,44,32,0.14)] md:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">

                    <div className="h-36 w-full shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-40">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">

                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8860b]">
                              Premium Coffee
                            </span>

                            <h2 className="mt-1 font-serif text-2xl font-bold text-[#4a2c20]">
                              {product.title}
                            </h2>
                          </div>
                          <button
                            onClick={() => removeProduct(product)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f1e8] text-[#76594c] transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                            title="Remove"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#76594c]">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center overflow-hidden rounded-xl border border-[#dbc9b8] bg-[#f7f1e8]">
                          <button
                            onClick={() => decreaseQuantity(product)}
                            className="flex h-10 w-10 items-center justify-center text-[#5a3425] transition hover:bg-[#e9dccd]"
                          >
                            <FaMinus size={11} />
                          </button>

                          <span className="flex h-10 min-w-10 items-center justify-center border-x border-[#dbc9b8] px-3 font-bold text-[#4a2c20]">
                            {product.quantity || 1}
                          </span>

                          <button
                            onClick={() => increaseQuantity(product)}
                            className="flex h-10 w-10 items-center justify-center text-[#5a3425] transition hover:bg-[#e9dccd]"
                          >
                            <FaPlus size={11} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-widest text-[#a58b7d]">
                            Subtotal
                          </p>

                          <p className="mt-1 text-xl font-bold text-[#b8860b]">
                            $
                            {(
                              Number(product.price) *
                              (product.quantity || 1)
                            ).toFixed(2)}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 pt-3 font-semibold text-[#5a3425] transition-colors hover:text-[#b8860b]"
              >
                <FaArrowLeft size={13} />
                Continue Shopping
              </Link>
            </div>
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <div className="overflow-hidden rounded-3xl bg-[#5a3425] text-white shadow-[0_20px_50px_rgba(74,44,32,0.25)]">

                <div className="p-8">

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                    Order Summary
                  </span>

                  <h2 className="mt-3 font-serif text-3xl font-bold">
                    Your Order
                  </h2>

                  <div className="my-7 h-px bg-white/20" />

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-amber-100">
                      <span>Items</span>
                      <span>{cart.length}</span>
                    </div>

                    <div className="flex justify-between text-sm text-amber-100">
                      <span>Delivery</span>
                      <span>Free</span>
                    </div>
                  </div>

                  <div className="my-7 h-px bg-white/20" />
                  <div className="flex items-end justify-between">
                    <span className="text-lg text-amber-100">
                      Total
                    </span>

                    <span className="font-serif text-4xl font-bold text-amber-300">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "SUBMIT",
                      })
                    }
                    className="mt-8 w-full rounded-xl bg-[#d4a72c] px-6 py-4 font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#e0b83e] hover:-translate-y-1 active:scale-95"
                  >
                    Place Order
                  </button>

                  <p className="mt-5 text-center text-xs leading-5 text-amber-100/70">
                    Your order will be freshly prepared with care.
                  </p>
                </div>

                <div className="h-2 bg-[#d4a72c]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;