import React, { useState,useEffect } from 'react'

export default function Button() {
    const[button,setButton]=useState(false);
    const[collection,setCollection]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/necollection')
          .then(res => res.json())
          .then(data => {
            setCollection(data);
          });
      }, []);
  return (
    <>
       
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10">
{button &&
  collection.map((necollection) => (
   <div 
      key={necollection.id} 
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="relative h-96 w-full overflow-hidden bg-gray-50">
        <img 
          src={necollection.image} 
          alt={necollection.name} 
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
          {necollection.category}
        </div>
      </div>

    
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {necollection.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6">
         Premium quality, exceptional comfort, and a stylish design that elevates your everyday look.
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${necollection.price.toFixed(2)}
          </span>
          
        </div>
      </div>
    </div>
  ))
}
</div>

<div className="mt-8.75 flex items-center justify-center">
  <button onClick={()=>setButton(!button)} className="px-9 py-4 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]">
    Daha Cox
  </button>
</div>
    </>
  )
}
