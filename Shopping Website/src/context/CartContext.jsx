import { createContext, useReducer } from "react";
import { initialState,CartReducer } from "./CartReducer";
import { useContext,useEffect } from "react";


const CartContext= createContext();
export function CartProvider({children}){
const savedCart = JSON.parse(localStorage.getItem("cart"));
    const [state, dispatch] = useReducer(CartReducer,savedCart ? {
        cartItems: savedCart.cartItems || [],
        heart: savedCart.heart || []}: initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return (
        <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
)

}
 export function useCart(){
    return useContext(CartContext)
 }