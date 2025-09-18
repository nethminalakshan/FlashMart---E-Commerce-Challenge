import { useParams } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "T-Shirt", category: "clothing" },
  { id: 3, name: "Rice", category: "groceries" },
  { id: 4, name: "Novel", category: "books" },
  { id: 5, name: "Headphones", category: "electronics" },
  { id: 6, name: "Pizza", category: "food" },
];

const CategoryPage = () => {
  const { categoryName } = useParams();
  const products = allProducts.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName} Products</h1>

      {products.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 list-none p-0">
          {products.map((p) => (
            <li
              key={p.id}
              className="bg-white rounded-xl shadow-md p-5 text-center font-medium 
                         transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {p.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;