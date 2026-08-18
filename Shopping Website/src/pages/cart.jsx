import React, { useState } from 'react'
import CartItem from '../context/CartItem'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm'; // yolunu öz layihənizə görə dəyişin

export default function Cart() {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state;
  const [showCheckout, setShowCheckout] = useState(false);

  const totalItems = cartItems.reduce((sum, product) => sum + product.count, 0);
  const totalPrice = cartItems.reduce((sum, product) => sum + product.count * product.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center font-bold text-2xl mt-12.5 mb-3'>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Səbətiniz Boşdur
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Hələ heç bir məhsul seçməmisiniz. Alış-verişə başlayın və
          favorit paltarlarınızı tapın!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='flex justify-between'>
        <div className='w-220'>
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>

        <div className='w-80 h-fit sticky top-5 bg-white shadow-2xl p-5 rounded-lg mr-8'>
          <h2 className='font-bold mb-2'>Məhsul Sayı: {totalItems}</h2>
          <h2 className='font-bold'>Qiymət: {totalPrice} ₼</h2>
          <button
            onClick={() => setShowCheckout(true)}
            className='border border-amber-300 bg-amber-300 text-white font-bold py-3 px-6 mt-3 ml-5 mb-3'
          >
            Sifariş et
          </button>
        </div>
      </div>

      {showCheckout && (
        <CheckoutForm
          onClose={() => setShowCheckout(false)}
          totalPrice={totalPrice}
          totalItems={totalItems}
        />
      )}
    </>
  );
}