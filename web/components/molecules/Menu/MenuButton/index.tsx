import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const MenuButton: FC<PropTypes> = ({ _css }) => {
  return <div css={[_css, styles.container]} data-testid="menubutton"></div>
}
const styles = {
  container: css``,
}
