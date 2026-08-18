import React from 'react'
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Heart() {

  const { state, dispatch } = useCart();
 const navigate=useNavigate();
  return (
    <div className='p-10'>

      {state.heart.map((product) => (

        <div
          key={product.id}
          className="group relative  mb-8 flex flex-row w-full max-w-2xl bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden mt-12.5"
        >

          <div className="relative w-32 min-h-35 bg-gray-50 overflow-hidden shrink-0">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
              {product.category}
            </div>

          </div>

          <div className="flex-1 p-3 flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
            </div>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVEHEART",
                  payload: product.id
                })
              }
              className="flex items-center justify-center w-8 h-8 border rounded-lg hover:border-red-600 hover:text-red-600 "
            >
              <Trash2 size={14} />
            </button>

          </div>

        </div>

      ))}

    </div>
  )
}