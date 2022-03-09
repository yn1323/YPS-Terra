import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

export type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const {{ inputs.component | pascal }}: FC<PropTypes> = ({ _css }) => {
  return <div css={[_css, styles.container]} data-testid="{{inputs.component | lower}}"></div>
}
const styles = {
  container: css``
}
