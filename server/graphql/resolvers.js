import { Product, Category } from "../models/models.js";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find({});
    },

    categories: async () => {
      return await Category.find({});
    },
  },
  Mutation: {
    addProduct: async (_, { name, description, price, quantity }) => {
      const product = new Product({ name, description, price, quantity });
      await product.save();

      pubsub.publish("PRODUCT_ADDED", { productAdded: product });
      return product;
    },

    addCategory: async (_, { name }) => {
      const category = new Category({ name });
      await category.save();
      pubsub.publish("CATEGORY_ADDED", { categoryAdded: category });

      return category;
    },
  },
  Subscription: {
    productAdded: {
      subscribe: () => pubsub.asyncIterator(["PRODUCT_ADDED"]),
    },
    categoryAdded: {
      subscribe: () => pubsub.asyncIterator(["CATEGORY_ADDED"]),
    },
    stockUpdated: {
      subscribe: (parent, { productId }) =>
        pubsub.asyncIterator([`STOCK_UPDATED_${productId}`]),
    },
  },
};

export default resolvers;
