import { gql } from "@apollo/client";

export const ADD_GAME = gql`
  mutation AddGame($game: GameInput!) {
    addGame(game: $game) {
      message
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation AddAuthor($auth: AuthorInput!) {
    addAuthor(auth: $auth) {
      message
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation Mutation($updateGameId: ID!, $upGame: UpdateGameInput!) {
    updateGame(id: $updateGameId, upGame: $upGame) {
      id
      title
      platform
    }
  }
`;

export const DEL_GAME = gql`
  mutation DeleteGame($deleteGameId: ID!) {
    deleteGame(id: $deleteGameId) {
      message
      success
      updatedGames {
        id
        title
        platform
      }
    }
  }
`;
