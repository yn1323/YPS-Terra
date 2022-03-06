import { gql } from '@apollo/client'

export const Recipes = gql`
  query Tomato {
    findAll {
      id
    }
  }
`
