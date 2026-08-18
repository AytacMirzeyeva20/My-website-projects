export const initialState={

    cartItems:[],
    heart:[]
}
export function CartReducer(state,action){
    switch(action.type){
        case "ADD" : {
            const product=action.payload;
            const productItem=state.cartItems.find(
                (cartItem)=>cartItem.id===product.id
            )
            if(productItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((cartItem)=>
cartItem.id===product.id ? {...cartItem, count: cartItem.count + 1} :cartItem
                    ),
                };
            }
            return{
                ...state,
                cartItems: [...state.cartItems, {...product,count:1}]
            }
        }
        case "HEART" :{
            const product=action.payload;
            const productItem=state.heart.find(
                (heart)=>heart.id===product.id
            )
            if(productItem){
                return{
                    ...state,
                    heart: state.heart.map((heart)=>
heart.id===product.id ? {...heart, count: heart.count + 1} :heart
                    ),
                };
            }
            return{
                ...state,
                heart: [...state.heart, {...product,count:1}]
            }
        }
        

        case "DECREMENT" :{
            const id=action.payload;
            return{
                ...state,
                cartItems: state.cartItems
                .map((product)=>product.id === id ? {...product, count:product.count-1} : product)
                .filter((product)=>product.count>0)
            }
        }


 case "INCREMENT" :{
            const id=action.payload;
            return{
                ...state,
                cartItems: state.cartItems
                .map((product)=>product.id === id ? {...product, count:product.count+1} : product)
            }
        }

case "REMOVEHEART":
  return {
    ...state,
    heart: state.heart.filter(
      (product) => product.id !== action.payload
    )
  };


        case "REMOVE": {
        const id= action.payload;
        return{
            ...state,
            cartItems: state.cartItems.filter((product)=>product.id !== id),
        }
        }
default:
    return state;
    }
}