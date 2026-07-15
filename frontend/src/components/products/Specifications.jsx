function Specifications({ specifications }) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {Object.entries(specifications).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-gray-200 px-6 py-5 last:border-b-0"
          >
            <span className="font-semibold capitalize text-gray-700">
              {key}
            </span>

            <span className="text-gray-900">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specifications;