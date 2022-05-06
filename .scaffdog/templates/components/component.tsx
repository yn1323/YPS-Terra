import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const {{ inputs.component | pascal }}: FC<PropTypes> = ({ _css }) => {
  return <Box css={[_css, styles.container]} data-testid="{{inputs.component | lower}}"></Box>
}
const styles = {
  container: css``,
}
