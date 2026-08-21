import { createContext,useReducer } from "react";

export type Product={
 id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail?: string;
  quantity?: number;
}

type CartState = {
  cart: Product[];
};

const initCartState: CartState = {
  cart: [],
};

const REDUCER_ACTION_TYPE={
    ADD:"ADD",
    REMOVE:"REMOVE",
    QUANTITY:"QUANTITY",
    SUBMIT:"SUBMIT"
}as const;
type CartAction={
    type:string,
    payload?:Product,
    quantity?:number,
}
type CartContextType={
cart:Product[];
dispatch:React.Dispatch<CartAction>
}
export const CartContext=createContext<CartContextType | undefined>(undefined);
const cartReducer=(
    state:CartState,
    action:CartAction
):CartState=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:
            if(!action.payload){
                return state;
            }
          return {
        ...state,
        cart: [...state.cart, {
          ...action.payload,
          quantity:1,
         }
        ],
      };


 case REDUCER_ACTION_TYPE.REMOVE:
  if (!action.payload) {
    return state;
  };
 return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload?.id
        ),
      };

      case REDUCER_ACTION_TYPE.QUANTITY:
      if (!action.payload || action.quantity === undefined) {
        return state;
      }

      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload?.id
            ? {
                ...product,
                quantity: action.quantity,
              }
            : product
        ),
      };

            default:
            return state;
    }
};




function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initCartState
  );

 return (
 <CartContext.Provider value={{
    cart: state.cart,
    dispatch
 }}
 >{children}</CartContext.Provider>
)}

export default CartProvider;