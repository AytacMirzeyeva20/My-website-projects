import React,{useState,useEffect} from 'react'
export default function Categories() {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])
  return (
    <>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {categories.map((category, index) => (
    <a 
      key={index}
      href={category.link}
      className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 relative overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-center">
          <h4 className="text-white font-bold text-lg md:text-xl">{category.name}</h4>
          <p className="text-white/80 text-xs md:text-sm mt-1">{category.count} məhsul</p>
        </div>
      </div>
    </a>
  ))}
</div>



</>
  )
}
