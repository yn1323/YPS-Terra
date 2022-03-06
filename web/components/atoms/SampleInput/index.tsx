import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const SampleInput: FC<PropTypes> = ({ _css }) => {
  return (
    <div css={_css}>
      <input data-testid="name" />
    </div>
  )
}
const style = {}
