const Product = require("../models/Product");
const { PubSub } = require("graphql-subscriptions");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    products: () => Product.find(),
  },
  Mutation: {
    addProduct: async (_, { name, description, price, quantity }) => {
      const product = new Product({ name, description, price, quantity });
      await product.save();
      pubsub.publish("PRODUCT_ADDED", { productAdded: product });
      return product;
    },
  },
  Subscription: {
    productAdded: {
      subscribe: () => pubsub.asyncIterator(["PRODUCT_ADDED"]),
    },
    stockUpdated: {
      subscribe: (parent, { productId }) =>
        pubsub.asyncIterator([`STOCK_UPDATED_${productId}`]),
    },
  },
};

module.exports = resolvers;
