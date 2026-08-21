import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;