import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../components/layout/MainLayout";

// Pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProductList from "../components/product/ProductList";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes with layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Auth routes (no navbar/footer if you want) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected route example */}
      <Route path="/checkout" element={<Checkout />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

      <Route path="/productlist" element={<ProductList />} />
    </Routes>
  );
};

export default AppRoutes;
