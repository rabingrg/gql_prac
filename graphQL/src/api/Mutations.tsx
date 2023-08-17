import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation createGame($name: String!, $code: String!) {
    createContinet(name: $name, code: $code) {
      id
      name
      code
    }
  }
`;
