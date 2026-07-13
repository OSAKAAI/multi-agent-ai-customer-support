import { FaBoxes, FaShieldAlt, FaHeadset, FaGamepad } from "react-icons/fa";
import Container from "../ui/Container";

const stats = [
  {
    id: 1,
    icon: <FaGamepad />,
    value: "7+",
    label: "Product Categories",
  },
  {
    id: 2,
    icon: <FaBoxes />,
    value: "50+",
    label: "Premium Products",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    value: "3 Years",
    label: "Warranty",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    value: "24/7",
    label: "AI Support",
  },
];

function ProductStats() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex justify-center text-4xl text-orange-500">
                {stat.icon}
              </div>

              <h2 className="text-3xl font-bold text-black">
                {stat.value}
              </h2>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductStats;