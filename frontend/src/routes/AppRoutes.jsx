import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import CategoryProducts from "../pages/CategoryProducts"; // NEW
import About from "../pages/About";
import Support from "../pages/Support";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/layout/ScrollToTop";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          {/* Dynamic Category Route */}
          <Route
  path="/products/:categorySlug"
  element={<CategoryProducts />}
/>

<Route
  path="/products/:categorySlug/:productSlug"
  element={<ProductDetails />}
/>

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;