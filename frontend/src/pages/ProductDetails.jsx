import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductHero from "../components/products/ProductHero";
import Specifications from "../components/products/Specifications";

function ProductDetails() {
  const { productSlug } = useParams();

  const product = products.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white">
        Product not found.
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <ProductHero product={product} />
        <Specifications
           specifications={product.specifications}
        />
      </div>
    </section>
  );
}

export default ProductDetails;