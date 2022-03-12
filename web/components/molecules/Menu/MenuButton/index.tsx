import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC, useState, useRef } from 'react'
import { ListMenu } from '@/atoms/List/ListMenu'
import { Popper } from '@/atoms/Text/Popper'
import { MenuItem } from '@/ui/layout/menu'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  icon: JSX.Element
  items?: MenuItem[]
  delimeterPosition?: number[]
  hasMenu: boolean
  link: string
}

export const MenuButton: FC<PropTypes> = ({
  _css,
  icon,
  items = [],
  delimeterPosition,
  hasMenu,
  link,
  children,
}) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  return (
    <div css={_css}>
      <Button
        css={styles.button}
        startIcon={icon}
        endIcon={hasMenu ? <KeyboardArrowDown /> : undefined}
        href={link ? link : undefined}
        onClick={!link ? () => setShow(true) : undefined}
        ref={ref}
        data-testid="button"
      >
        {children}
      </Button>
      {!!items.length && (
        <Popper show={show} setShow={setShow} anchorEl={ref.current}>
          <ListMenu items={items} delimeterPosition={delimeterPosition} />
        </Popper>
      )}
    </div>
  )
}
const styles = {
  button: css`
    color: ${themes.palette.text.secondary};
  `,
}
