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

export const ADD_CATEGORY = gql`
  mutation ($name: String!) {
    addCategory(name: $name) {
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products {
      name
      description
      price
      quantity
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
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

export const CATEGORY_ADDED = gql`
  subscription {
    category_added {
      name
    }
  }
`;
