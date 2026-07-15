function ProductHero({ product }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Product Image */}
      <div className="rounded-3xl bg-gray-100 p-8 shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-5xl font-bold text-gray-900">
          {product.name}
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          {product.shortDescription}
        </p>

        <div className="mt-6 flex items-center gap-2">
          <span className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white">
            ⭐ {product.rating}
          </span>

          <span className="text-gray-500">
            Premium Gaming Series
          </span>
        </div>

        <h2 className="mt-8 text-4xl font-bold text-orange-500">
          ₹{product.price.toLocaleString()}
        </h2>

        <p className="mt-5 font-medium text-green-600">
          ✓ In Stock
        </p>

        <p className="mt-2 text-gray-700">
          🛡 {product.warranty}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
            Buy Now
          </button>

          <button className="rounded-xl border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            Add to Cart
          </button>
        </div>

        <button className="mt-6 w-full rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-neutral-800">
          Ask AXIOM AI About This Product
        </button>
      </div>
    </div>
  );
}

export default ProductHero;