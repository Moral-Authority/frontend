import { gql } from '@apollo/client';

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation AddUser($input: NewUser!) {
    addUser(input: $input) {
      _id
      email
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginUser!) {
    login(input: $input) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const TOGGLE_USER_FAV = gql`
  mutation ToggleUserFav($input: ToggleUserFav!) {
    toggleUserFav(input: $input) {
      id
      product {
        _id
        Title
      }
    }
  }
`;


export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser(
    $userId: String!
    $email: String
    $phone: String
    $password: String
  ) {
    updateUser(input: { userId: $userId, email: $email, phone: $phone, password: $password }) {
      _id
      email
      phone
    }
  }
`;

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
      name
      createdAt
      age
      address
    }
  }
`;


export const RESET_PASSWORD_MUTATION = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
      name
      createdAt
      age
      address
    }
  }`;