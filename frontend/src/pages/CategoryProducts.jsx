import { useParams } from "react-router-dom";

import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";



function CategoryProducts() {
  const { categorySlug } = useParams();

  // Filter products based on the URL slug
  const filteredProducts = products.filter(
    (product) => product.category === categorySlug
  );

  return (
    <section className="min-h-screen bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-7xl">

        {/* Category Heading */}
        <h1 className="text-5xl font-bold text-orange-500 capitalize">
          {categorySlug.replace(/-/g, " ")}
        </h1>

        <p className="mt-4 text-gray-600">
          Explore our premium {categorySlug.replace(/-/g, " ")} collection.
        </p>

        {/* Product Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center text-gray-600">
            <p>No products available in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default CategoryProducts;