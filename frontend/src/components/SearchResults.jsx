import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((product) => {
    const search = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.shortDescription.toLowerCase().includes(search)
    );
  });

  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900">
          Search Results
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Results for{" "}
          <span className="font-semibold text-orange-500">
            "{query}"
          </span>
        </p>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              We couldn't find any products matching{" "}
              <span className="font-semibold text-orange-500">
                "{query}"
              </span>
              .
            </p>

            <p className="mt-2 text-gray-500">
              Try searching by product name, category, or keywords like
              <span className="font-medium"> RGB</span>,
              <span className="font-medium"> White</span>,
              <span className="font-medium"> Laptop</span>, or
              <span className="font-medium"> Mouse</span>.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default SearchResults;