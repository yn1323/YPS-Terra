import { Box } from '@chakra-ui/react'
import { FC } from 'react'

type PropTypes = {}

export const {{ inputs.component | pascal }}: FC<PropTypes> = ({}) => {
  return <Box data-testid="{{inputs.component | lower}}"></Box>
}
