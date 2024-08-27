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


const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser(
    $id: Int!
    $name: String!
    $age: Int!
    $address: String!
  ) {
    updateUser(id: $id, input: { name: $name, age: $age, address: $address }) {
      id
      name
      createdAt
      age
      address
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
