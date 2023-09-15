import React, { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { ADD_CATEGORY, CATEGORY_ADDED } from "../queries/queries";

function CategoryForm() {
  const [addCategory] = useMutation(ADD_CATEGORY);
  const [categoryName, setCategoryName] = useState("");

  const { data } = useSubscription(CATEGORY_ADDED, { fetchPolicy: "no-cache" });
  console.log(data);

  const handleAddCategory = async () => {
    console.log("categoryName", categoryName);
    addCategory({ variables: { name: categoryName } });
  };

  return (
    <>
      <h2>Yeni Kategori Ekle</h2>
      <input
        type="text"
        placeholder="Kategori Adı"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleAddCategory}>Kategori Ekle</button>
    </>
  );
}

export default CategoryForm;
