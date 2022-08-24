import { gql } from '@apollo/client';

const GET_USERS_QUERY = gql`
  query {
    users {
      name
      createdAt
      age
      address
    }
  }
`;

export { GET_USERS_QUERY };
