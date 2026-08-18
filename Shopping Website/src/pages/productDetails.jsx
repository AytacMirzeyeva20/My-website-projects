import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import { CiHeart } from "react-icons/ci";
export default function ProductDetails() {

  const { id } = useParams();
const {dispatch}=useCart();
  const [product, setProduct] = useState(null);
const navigate=useNavigate();
const isLogin = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>
  }



  return (
    <>
   <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-3xl transition-shadow duration-500">
        <div className="w-full md:w-1/2 bg-gray-100 relative group overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-gray-800 shadow-sm">
            Model
          </div>
          <div className="h-full w-full flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain drop-shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>
 <p className="text-gray-500 text-sm mb-6">
        Premium quality, exceptional comfort, and a stylish design that elevates your everyday look.
        </p>
        <div className="flex items-center gap-1">
               <span className="text-yellow-400 text-lg">
                <FaStar />
               </span>
               <span className="text-gray-400 text-sm">(120 comment)</span>
            </div>

          <div className="flex items-end justify-between mb-6 border-b border-gray-100 pb-6 mt-5">
            <div>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">Price</span>
              <div className="text-4xl font-bold text-indigo-600">
                $ {product.price.toFixed(2)}
              </div>
            </div>
          </div>
         
         <div className='mt-5'>
            <h3 className=' text-[15px]'>Select Size</h3> 
            <div className=' flex mt-5 gap-5 mb-5'>
                <button className='border border-gray-400 bg-white font-bold py-3 px-4'> S </button>
                <button  className='border border-gray-400 bg-white font-bold py-3 px-3'> M </button>
                <button className='border border-gray-400 bg-white font-bold py-3 px-4'  > L </button>
                <button className='border border-gray-400 bg-white font-bold py-3 px-3'  > XL </button>
                <button  className='border border-gray-400 bg-white font-bold py-3 px-3' > XXL </button>
            </div>
         </div>

          <div className="flex gap-4 mt-auto">
            <button className="flex-1 bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-1 flex items-center justify-center gap-2" onClick={() => {
   const isLogin=localStorage.getItem("user")
    console.log("isLogin:", isLogin);

    if (!isLogin) {
      console.log("login səhifəsinə gedir");

      localStorage.setItem(
        "pendingCart",
        JSON.stringify(product)
      );

      navigate("/login");
      return;
    }

    dispatch({
      type: "ADD",
      payload: product
  });

  
}} >
              
              Add to Cart
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-xl text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors duration-300"
            onClick={() => {
               dispatch({
    type: "HEART",
      payload: product
    });
   
}}>
              <CiHeart />
            </button>
        
          </div>

        </div>
      </div>
    </div>
    </>
  )
}