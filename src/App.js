import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="category" element={<CategoryPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
