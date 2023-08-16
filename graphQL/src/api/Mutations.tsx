import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation createContinent($name: String!, $code: String!) {
    createContinet(name: $name, code: $code) {
      id
      name
      code
    }
  }
`;
