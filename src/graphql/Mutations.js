import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $age: Int!, $address: String!) {
    createUser(name: $name, age: $age, address: $address) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

export { CREATE_USER_MUTATION };
