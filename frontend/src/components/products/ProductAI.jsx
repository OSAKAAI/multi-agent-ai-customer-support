import Container from "../ui/Container";

function ProductAI() {
  return (
    <section className="bg-white pb-10">
      <Container>
        <div
  className="
    ai-card
    relative
    mx-auto
    max-w-4xl
    rounded-3xl
    border
    border-orange-300
    bg-white
    p-6
    shadow-lg
  "
>

          <div className="text-center">

            <p className="text-3xl"></p>

            <h2 className="mt-3 text-3xl font-bold text-black">
              AXIOM AI
            </h2>

            <p className="mt-3 text-gray-600">
              Need help choosing the perfect gaming gear?
            </p>

          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">

            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-orange-500"
            />

            <button
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Ask AI
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default ProductAI;