import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Clothing", slug: "clothing" },
  { name: "Groceries", slug: "groceries" },
  { name: "Books", slug: "books" },
  { name: "Food", slug: "food" },
];

const CategoriesPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <Link
  key={cat.slug}
  to={`/categories/${cat.slug}`} // template literal
  className="flex justify-center items-center bg-white rounded-xl shadow-md p-8 font-bold text-gray-800 no-underline transition duration-300 hover:bg-gray-100 hover:-translate-y-1"
>
  {cat.name}
</Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
