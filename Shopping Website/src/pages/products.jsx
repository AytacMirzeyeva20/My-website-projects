import React, { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react';
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Price from './price';
import Button from './button';
export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('Categories');
  const [products, setProducts] = useState([]);
  const[price,setPrice]=useState("");
  const categories = ['Categories', 'Clothes', 'Bags', 'Shoes', 'Accessories','New'];
  const filterProduct =filter === 'Categories' ? products : products.filter((product) => product.category === filter);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

const navigate=useNavigate();
const {dispatch}=useCart();

  return (
    <>
    
<div className="bg-gray-50 py-8 px-4 md:px-8">
  <div className="max-w-3xl mx-auto mt-16.25">
    <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row gap-3 border border-gray-100">
      <div className="relative flex-1">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch />
        </div>
        <input 
          type="search" 
          placeholder="Search Products..." 
          className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 font-medium"
          onChange={(e)=>setSearch(e.target.value)} value={search}
        />
        
      </div>
      <div className="hidden sm:block w-px bg-gray-200"></div>
     
      <div className="relative">
        <select  value={filter} onChange={(e)=>setFilter(e.target.value)}
          className="appearance-none w-full sm:w-48 px-5 py-4 bg-gray-50 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 text-gray-700 font-medium cursor-pointer pr-10"
        >
          {categories.map((category)=>(
            <option key={category} value={category}>
              {category}
            </option>
          ))}
    
        </select>


        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
      <FaCheck />
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
        <FaSearch/>
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  </div>
</div>

 <div className='flex justify-end'>
  <Price  price={price} setPrice={setPrice}/>
 </div>
            
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10">
{Array.isArray(filterProduct) &&
          filterProduct
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .filter((product)=>{
              if(price=== "0-10"){
                return product.price<=10;
              }
               if(price=== "10-50"){
                return (
                  product.price>10 && product.price<=50);
              }
               if(price=== "50-100"){
                return (product.price>50 &&  product.price<=100);
              }
              return true;
            })
            .map((product) => (
    <div 
      key={product.id} 
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative h-96 w-full overflow-hidden bg-gray-50">
        <Link to={`/ProductDetails/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        </Link>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
          {product.category}
        </div>
      </div>

    
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6">
         Premium quality, exceptional comfort, and a stylish design that elevates your everyday look.
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          
        </div>
      </div>
    </div>
          
  ))}
     
</div>
<Button/>
    </>
  )
}
