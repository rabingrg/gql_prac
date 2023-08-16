import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      name
      code
      countries {
        name
        phone
      }
    }
  }
`;
