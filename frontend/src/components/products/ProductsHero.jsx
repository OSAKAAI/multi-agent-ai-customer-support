import Container from "../ui/Container";

function ProductsHero() {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            AXIOM
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black">
            Our Products
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore our premium gaming collection designed for performance,
            comfort, and immersive gameplay.
          </p>

        </div>
      </Container>
    </section>
  );
}

export default ProductsHero;