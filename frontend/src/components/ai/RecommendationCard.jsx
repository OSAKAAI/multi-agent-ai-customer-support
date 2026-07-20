import { Link } from "react-router-dom";

function RecommendationCard({ product }) {
  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-black">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
          {product.shortDescription}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-orange-500">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
            ⭐ {product.rating}
          </span>
        </div>

        <span className="mt-3 text-sm font-semibold text-orange-500 transition group-hover:translate-x-1">
          View Product →
        </span>
      </div>
    </Link>
  );
}

export default RecommendationCard;