import { gql } from '@apollo/client';

const GET_USERS_QUERY = gql`
  query {
    users {
      id
      name
      createdAt
      age
      address
    }
  }
`;

const GET_USER_QUERY = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      createdAt
      age
      address
    }
  }
`;

export { GET_USERS_QUERY, GET_USER_QUERY };
