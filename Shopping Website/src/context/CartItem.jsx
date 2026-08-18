import { useCart } from "./CartContext"
import { Minus, Plus, Trash2, ShoppingBag} from 'lucide-react';
export default function CartItem({product}){
    const {dispatch}=useCart();
  
    return(
        <>
  
    <div className="group relative  mt-5 mb-8 flex flex-row w-full max-w-2xl  bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
    <div className="relative w-32 min-h-35 bg-gray-50  overflow-hidden shrink-0">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-2 left-2 bg-gray-900/80 backdrop-blur-sm text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider z-10">
        {product.category}
      </div>
      
    </div>
    <div className="flex-1 p-3 flex flex-row items-center justify-between gap-5">
      <div className="flex-1">
        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-indigo-600">
            $ {product.price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-[9px]">/ ədəd</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">
        <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-all duration-150" onClick={()=>dispatch({type:"DECREMENT",payload:product.id})}>
          <Minus size={11} />
        </button>
         <span className="w-4 text-center font-bold text-gray-800 text-xs">
          {product.count}
        </span>
        <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-all duration-150" onClick={()=>dispatch({type:"INCREMENT",payload:product.id})} >
          <Plus size={11} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center w-7 h-7 bg-white border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 rounded-lg transition-all duration-200" onClick={()=>dispatch({type:"REMOVE",payload:product.id})}>
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  </div>



        </>
    )


    }

        