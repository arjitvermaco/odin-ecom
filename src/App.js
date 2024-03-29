import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";
function App() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="category/:id" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
    </>
    
  );
}

export default App;
