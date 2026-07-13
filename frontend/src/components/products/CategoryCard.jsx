import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-black group-hover:text-orange-500">
          {category.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {category.description}
        </p>

        <p className="mt-5 font-semibold text-orange-500">
          Explore →
        </p>

      </div>
    </Link>
  );
}

export default CategoryCard;