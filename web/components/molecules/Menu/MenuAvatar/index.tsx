import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Avatar, Button } from '@mui/material'
import { FC, Fragment } from 'react'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  userName: string
  imagePath?: string
  onlyImage?: boolean
}

export const MenuAvatar: FC<PropTypes> = ({
  _css,
  userName,
  imagePath = '/static/images/avatar/1.jpg',
  onlyImage = false,
}) => {
  return (
    <Fragment>
      <Button css={[_css, styles.button]} data-testid="button">
        <Avatar alt={userName} src={imagePath} />
        {!onlyImage && <span css={styles.name}>{userName}</span>}
      </Button>
    </Fragment>
  )
}

const styles = {
  space: css`
    flex-grow: 1;
  `,
  button: css`
    color: ${themes.palette.text.secondary};
    padding: 2px 8px;
  `,
  name: css`
    margin-left: 10px;
  `,
}
