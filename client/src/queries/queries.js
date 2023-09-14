import { gql } from "@apollo/client";

export const ADD_PRODUCTS = gql`
  mutation (
    $name: String!
    $description: String!
    $price: Float!
    $quantity: Int!
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      quantity: $quantity
    ) {
      name
      description
      price
      quantity
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
      quantity
    }
  }
`;

export const PRODUCT_ADDED = gql`
  subscription {
    productAdded {
      name
      description
      price
      quantity
    }
  }
`;
