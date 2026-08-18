import React, { useEffect, useState } from 'react'
export default function Clothes() {
    const[clothes,setClothes]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:3000/collection')
    .then(res=>res.json())
    .then(data=>{
        setClothes(data)
    });
   },[])
  return (
    <>
    <div  className='h-90 '
          style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)),
            url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920'),
            linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.3))
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} 
  >
    <h1 className='flex items-center justify-center font-bold text-white text-4xl p-30'>New Collection</h1>
    </div>

   <div className= "bg-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
           <div>
            {clothes.map((product)=>(
                <div className='grid grid-cols-4 gap-10 mt-11.25 ml-5'>
<img  src={product.img1} className=' w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 '  />
 <img 
        src={product.img2} 
        alt="img2"
        className="w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 "
      />

      <img 
        src={product.img3} 
        alt="img3"
        className=" w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 "
       
      />

      <img 
        src={product.img4} 
        alt="img4"
        className="  w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 "
      />
      
      <img 
        src={product.img5} 
        alt="img5"
        className=" w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400  "
      />

      <img 
        src={product.img6} 
        alt="img6"
        className=" w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 "
      />

      <img 
        src={product.img7} 
        alt="img7"
        className="  w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400 "
      />

      <img 
        src={product.img8} 
        alt="img8"
        className=" w-65 h-90 object-cover rounded-xl grayscale hover:grayscale-0 hover:rotate-3 transition-all duration-300 mt-6.25 border-2 border-dashed border-gray-400  "
      />

           </div>
            ))}
            </div>
            </div>
    </>
  )
}
