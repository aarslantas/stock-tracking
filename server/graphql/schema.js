const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    quantity: Int!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    addProduct(
      name: String!
      description: String
      price: Float!
      quantity: Int!
    ): Product
  }

  type Subscription {
    productAdded: Product
    stockUpdated(productId: ID!): Product
  }
`;

module.exports = typeDefs;
