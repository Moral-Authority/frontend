import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $age: Int!, $address: String!) {
    createUser(input: { name: $name, age: $age, address: $address }) {
      id
      name
      createdAt
      age
      address
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

export { CREATE_USER_MUTATION };
