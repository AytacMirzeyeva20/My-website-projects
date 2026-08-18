import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AdminContext = createContext(null);

const initialState = {
  products: [],
  orders: [],
  loading: false,
  error: null,
  stats: {
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    pendingOrders: 0,
  },
};

function adminReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false,
        stats: {
          ...state.stats,
          totalProducts: action.payload.length,
        },
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
        stats: { ...state.stats, totalProducts: state.stats.totalProducts + 1 },
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
        stats: { ...state.stats, totalProducts: state.stats.totalProducts - 1 },
      };
    case 'SET_ORDERS':
      const totalRevenue = action.payload.reduce((sum, o) => sum + (o.total || 0), 0);
      const pendingOrders = action.payload.filter((o) => o.status === 'pending').length;
      return {
        ...state,
        orders: action.payload,
        loading: false,
        stats: {
          ...state.stats,
          totalOrders: action.payload.length,
          totalRevenue,
          pendingOrders,
        },
      };
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map((o) =>
          o.id === action.payload.id ? { ...o, status: action.payload.status } : o
        ),
      };
    case 'DELETE_ORDER':
      return {
        ...state,
        orders: state.orders.filter((o) => o.id !== action.payload),
        stats: { ...state.stats, totalOrders: state.stats.totalOrders - 1 },
      };
    default:
      return state;
  }
}

export function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch products' });
    }
  };

  const fetchOrders = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const res = await fetch('http://localhost:3000/orders');
if (!res.ok) {
  dispatch({ type: 'SET_ORDERS', payload: [] });
  return;
}
const data = await res.json();
dispatch({ type: 'SET_ORDERS', payload: Array.isArray(data) ? data : [] });
    } catch (err) {
      // If orders endpoint doesn't exist yet, set empty array
      dispatch({ type: 'SET_ORDERS', payload: [] });
    }
  };

  const addProduct = async (productData) => {
    try {
      const res = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      const newProduct = await res.json();
      dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
      return { success: true, data: newProduct };
    } catch (err) {
      return { success: false, error: 'Failed to add product' };
    }
  };

  const updateProduct = async (id, productData) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      const updated = await res.json();
      dispatch({ type: 'UPDATE_PRODUCT', payload: updated });
      return { success: true, data: updated };
    } catch (err) {
      return { success: false, error: 'Failed to update product' };
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' });
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Failed to delete product' };
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const updated = await res.json();
      dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { id, status } });
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Failed to update order' };
    }
  };

  const deleteOrder = async (id) => {
    try {
      await fetch(`http://localhost:3000/orders/${id}`, { method: 'DELETE' });
      dispatch({ type: 'DELETE_ORDER', payload: id });
      return { success: true };
    } catch (err) {
      return { success: false, error: 'Failed to delete order' };
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        ...state,
        fetchProducts,
        fetchOrders,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
