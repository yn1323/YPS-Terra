import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { HelpOutlineOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: string
}

export const Note: FC<PropTypes> = ({ _css, children }) => {
  return (
    <Tooltip css={_css} title={children}>
      <IconButton data-testid="button" css={styles.button} disableRipple>
        <HelpOutlineOutlined />
      </IconButton>
    </Tooltip>
  )
}

const styles = {
  button: css`
    background: 'transparent';
    padding: 4px;
    svg {
      height: 1rem;
      width: 1rem;
    }
  `,
}
