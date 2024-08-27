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
