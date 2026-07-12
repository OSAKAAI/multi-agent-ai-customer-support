import { Link } from "react-router-dom";
import Container from "../ui/Container";
import gamingSetup from "../../assets/images/gaming-setup.png";

function StandOut() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Side */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              AXIOM
            </p>

            <h1 className="text-5xl font-bold leading-tight text-black">
              Stand Out.
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
              Premium Gaming Gear
            </h2>

            <p className="mt-4 max-w-lg text-gray-600">
              Discover gaming laptops, chairs, keyboards, mice, cabinets, and
              accessories designed to elevate every gaming session.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
              >
                Explore Products
              </Link>

              <Link
                to="/support"
                className="rounded-lg border border-black px-6 py-3 font-medium transition hover:bg-black hover:text-white"
              >
                Ask AI
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-1 justify-center">
<img
  src={gamingSetup}
  alt="AXIOM Gaming Setup"
  className="w-full max-w-xl rounded-3xl object-contain shadow-[0_26px_80px_rgba(249,115,22,0.45)]"
/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StandOut;