import React, {
  createContext,
  useReducer,
  useEffect,
  type ReactNode,
  type Dispatch,
} from "react";

export type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  price: number;
  quantity?: number;
};

type CartState = {
  cart: Product[];
  heart:Product[];
};

const initCartState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    heart: JSON.parse(localStorage.getItem("heart") || "[]"),
};

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
  ADD_HEART:"ADD_HEART",
  REMOVE_HEART:"REMOVE_HEART",
} as const;

type CartAction = {
  type: string;
  payload?: Product;
  quantity?: number;
};

type CartContextType = {
  cart: Product[];
  heart:Product[];
  dispatch: Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      if (!action.payload) {
        return state;
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };

    case REDUCER_ACTION_TYPE.REMOVE:
      if (!action.payload) {
        return state;
      }

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

    case REDUCER_ACTION_TYPE.ADD_HEART:
  if (!action.payload) {
    return state;
  }

  return {
    ...state,
    heart: [
      ...state.heart,
      action.payload,
    ],
  };
  case REDUCER_ACTION_TYPE.REMOVE_HEART:
     if (!action.payload) {
    return state;
     }
     return{
      ...state,heart:state.heart.filter(
        (product)=>product.id!==action.payload?.id
      ),
     }
    case REDUCER_ACTION_TYPE.SUBMIT:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

type CartProviderProps = {
  children: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initCartState
  );
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}, [state.cart]);
localStorage.setItem("heart", JSON.stringify(state.heart));
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,heart:state.heart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;