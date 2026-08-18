import React,{useState} from 'react'

export default function Price({price,setPrice}) {
     
    
  return (
    <>
      
<select onChange={(e)=>setPrice(e.target.value)} value={price} className="mr-5 appearance-none w-full sm:w-48 px-5 py-4 border border-blue-600 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 text-gray-70 font-medium cursor-pointer pr-10">
  <option value="">ALL</option>
  <option value="0-10"> 0-10$ </option>
  <option  value="10-50"> 10-50$ </option>
  <option  value="50-100" > 50-100$</option>
</select>
        
    </>
  )
}
