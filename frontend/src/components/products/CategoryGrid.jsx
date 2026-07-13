import Container from "../ui/Container";
import CategoryCard from "./CategoryCard";
import categories from "../../data/categories";

function CategoryGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoryGrid;