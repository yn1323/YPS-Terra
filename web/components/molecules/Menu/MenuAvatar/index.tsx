import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import { FC, useRef, useState, Fragment } from 'react'
import { ListMenu } from '@/atoms/List/ListMenu'
import { Popper } from '@/atoms/Text/Popper'
import { useScreenSize } from '@/hooks/useScreenSize'
import { USER_MENU } from '@/ui/layout/menu'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const MenuAvatar: FC<PropTypes> = ({ _css }) => {
  const [show, setShow] = useState(false)
  const { isPC } = useScreenSize()
  const ref = useRef(null)
  const clickHandler = () => setShow(true)
  return (
    <Fragment css={_css}>
      <div css={styles.space} />
      <Button
        css={styles.button}
        endIcon={isPC ? <KeyboardArrowDown /> : undefined}
        ref={ref}
        onClick={clickHandler}
        data-testid="button"
      >
        <Avatar alt="Somebody" src="/static/images/avatar/1.jpg" />
      </Button>
      <Popper
        show={show}
        setShow={setShow}
        anchorEl={ref.current}
        placement="bottom-end"
        data-testid="container"
      >
        <ListMenu items={USER_MENU} delimeterPosition={[1]} />
      </Popper>
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
}
