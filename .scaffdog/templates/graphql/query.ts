import { gql } from '@apollo/client'

export const {{ inputs.query | pascal }} = gql`
  query {{ inputs.query | pascal }} {
    recipe(id: "1") {
      id
      name
    }
  }
`
