import { gql } from '@apollo/client'

export const Recipes = gql`
  query Recipes {
    recipe(id: "1") {
      id
      name
    }
  }
`
