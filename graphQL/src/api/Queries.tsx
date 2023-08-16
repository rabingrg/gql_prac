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

export const GET_GAMES = gql`
  query getGames {
    games {
      id
      platform
      title
    }
  }
`;
