import ProductsHero from "../components/products/ProductsHero";
import ProductAI from "../components/products/ProductAI";
import CategoryGrid from "../components/products/CategoryGrid";
import ProductStats from "../components/products/ProductStats";

function Products() {
  return (
    <>
      <ProductsHero />
      <ProductAI />
      <CategoryGrid />
      <ProductStats />
    </>
  );
}

export default Products;