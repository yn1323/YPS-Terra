import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, Fragment } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: JSX.Element[]
}

export const Summary: FC<PropTypes> = ({ _css, children }) => {
  if (children.length !== 2) {
    return <></>
  }
  return (
    <>
      {children[0]}
      <div css={styles.body}>{children[1]}</div>
    </>
  )
}
const styles = {
  body: css`
    margin: 8px 0;
    margin-left: 24px;
  `,
}
