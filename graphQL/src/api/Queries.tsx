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

export const GET_GAME_BY_ID = gql`
query getGameById($gameId: ID!) {
  game(id: $gameId) {
    title
    platform
  }
}
`
export const GET_AUTHORS = gql`
query Authors {
  authors {
    id
    name
    verified
  }
}`

export const GET_AUTHOR_BY_ID = gql`
query GetAuthorById($authorId: ID!){
  author(id: $authorId) {
    name
  }
}
`
