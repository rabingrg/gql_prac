import { gql } from "@apollo/client";

export const ADD_GAME = gql`
mutation AddGame($game: GameInput!) {
  addGame(game: $game) {
    message
  }
}`

export const ADD_AUTHOR = gql`
mutation AddAuthor($auth: AuthorInput!) {
  addAuthor(auth: $auth) {
    message
  }
}`