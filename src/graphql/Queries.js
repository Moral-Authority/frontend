import { gql } from '@apollo/client';

export const GET_USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      createdAt
      age
      address
    }
  }
`;

export const GET_USER_QUERY = gql`
  query User($id: String!) {
    user(_id: $id) {
      _id
      email
      phone
    }
  }
`;


export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      _id
      Title
    }
  }
`;



export const GET_PRODUCT_BY_ID = gql`
  query GetProductByID($id: String!) {
    getProductByID(id: $id) {
      _id
      Title
    }
  }
`;


export const GET_FAVORITES_QUERY = gql`
  query GetAllUserFavs($id: String!) { 
    getAllUserFavs(id: $id) {         
      id
      product {
        _id
        Title
      }
    }
  }
`;

