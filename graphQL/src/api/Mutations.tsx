import { gql } from "@apollo/client";

export const ADD_GAME = gql`
mutation AddGame($game: GameInput!) {
  addGame(game: $game) {
    message
    success
    newlyAddedData {
      id
      platform
      title
    }
  }
}`