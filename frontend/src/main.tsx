import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/templates/Layout";
import Home from "./pages/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
