import { gql } from '@apollo/client';

const CREATE_ACCOUNT_MUTATION = gql`
  mutation CreateAccount($input: NewUser!) {
    addUser(input: $input) {
      _id
      email
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

export { CREATE_ACCOUNT_MUTATION };
