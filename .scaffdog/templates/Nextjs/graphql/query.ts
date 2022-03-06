import { gql } from '@apollo/client'

export const {{ inputs.query | pascal }} = gql`
  query {{ inputs.query | pascal }} {
    resolverName {
      id
    }
  }
`
