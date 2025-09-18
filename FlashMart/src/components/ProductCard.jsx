import React from "react";

const ProductCard = ({ name, image, price, cashPrice, inStock, itemCode }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md w-72 p-4 text-center">
      {/* Stock Badge */}
      <span
        className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-md text-white ${
          inStock ? "bg-green-600" : "bg-orange-500"
        }`}
      >
        {inStock ? "IN STOCK" : "COMING SOON"}
      </span>

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain rounded-md mb-3"
      />

      {/* Product Name & Item Code */}
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">Item Code: {itemCode}</p>

      {/* Prices */}
      <p className="text-red-600 font-semibold mt-2">Rs. {price.toLocaleString()}</p>
      <p className="text-green-700 font-bold">Cash Price: Rs. {cashPrice.toLocaleString()}</p>

      {/* Buttons */}
      <div className="flex justify-around mt-4">
        <button className="bg-red-500 text-white rounded-lg px-3 py-1 text-sm transition-colors duration-200 hover:bg-red-600">
          Add to Cart
        </button>
        <button className="bg-gray-700 text-white rounded-lg px-3 py-1 text-sm transition-colors duration-200 hover:bg-gray-800">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;