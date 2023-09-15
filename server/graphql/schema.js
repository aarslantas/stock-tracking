import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    quantity: Int!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    products: [Product]
    categories: [Category]
  }

  type Mutation {
    addProduct(
      name: String!
      description: String
      price: Float!
      quantity: Int!
    ): Product

    addCategory(name: String!): Category
  }

  type Subscription {
    productAdded: Product
    categoryAdded: Category
    stockUpdated(productId: ID!): Product
  }
`;

export default typeDefs;
