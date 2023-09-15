import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
});

const categorySchema = new Schema({
  name: String,
});

const Product = model("Product", productSchema);
const Category = model("Category", categorySchema);

export { Product, Category };
