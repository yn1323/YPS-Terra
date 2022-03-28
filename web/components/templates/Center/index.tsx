import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: JSX.Element
}

export const Center: FC<PropTypes> = ({ _css, children }) => {
  return <div css={[_css, styles.container]}>{children}</div>
}
const styles = {
  container: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 48px - 72px);
  `,
}
