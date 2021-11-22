import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query {
    getUser (email: "abbas@z.com") {
      id
      email
    }
  }
`;
