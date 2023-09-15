import React, { useState } from "react";
import { useSubscription, useMutation } from "@apollo/client";
import { ADD_PRODUCTS, PRODUCT_ADDED } from "../queries/queries";

function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [addProduct] = useMutation(ADD_PRODUCTS);

  const { data } = useSubscription(PRODUCT_ADDED, { fetchPolicy: "no-cache" });
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      price,
      quantity,
    };
    addProduct({ variables: productData });
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Quantity:
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
