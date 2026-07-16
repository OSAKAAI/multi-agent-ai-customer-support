import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/layout/ScrollToTop";

import Home from "../pages/Home";
import Products from "../pages/Products";
import CategoryProducts from "../pages/CategoryProducts";
import ProductDetails from "../pages/ProductDetails";
import SearchResults from "../components/SearchResults";
import About from "../pages/About";
import Support from "../pages/Support";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products Landing Page */}
          <Route path="/products" element={<Products />} />

          {/* Search Results */}
          <Route
            path="/products/search"
            element={<SearchResults />}
          />

          {/* Category */}
          <Route
            path="/products/:categorySlug"
            element={<CategoryProducts />}
          />

          {/* Product Details */}
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