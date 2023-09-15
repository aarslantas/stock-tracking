import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/queries";

function ProductList() {
  const { data } = useQuery(GET_PRODUCTS);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Lsit</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.description}</td>
              <td className="py-2 px-4">{product.price.toFixed(2)} TL</td>
              <td className="py-2 px-4">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
