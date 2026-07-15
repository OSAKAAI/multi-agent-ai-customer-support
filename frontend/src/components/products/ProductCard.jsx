import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
    >
      {/* Product Image */}
      <div className="overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-6">

        <h2 className="text-2xl font-bold text-white">
          {product.name}
        </h2>

        <p className="mt-3 text-gray-800">
          {product.shortDescription}
        </p>

        {/* Push bottom content to bottom */}
        <div className="mt-auto">

          <div className="mt-6 flex items-center justify-between">

            <span className="text-2xl font-bold text-orange-500">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
              ⭐ {product.rating}
            </span>

          </div>

          <button
            className="mt-6 w-full rounded-lg border border-orange-500 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            View Details →
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;