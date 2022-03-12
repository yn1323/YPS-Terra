import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import {
  Fade,
  ClickAwayListener,
  MenuList,
  Paper,
  Popper as PopperComponent,
} from '@mui/material'
import { FC } from 'react'

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

interface PropTypes {
  _css?: SerializedStyles | SerializedStyles[]
  show: boolean
  setShow: (show: boolean) => void
  anchorEl: null | HTMLElement
  placement?: Placement
  children: JSX.Element
  timeout?: number
}

export const Popper: FC<PropTypes> = ({
  _css,
  placement = 'bottom-start',
  show,
  setShow,
  anchorEl,
  children,
  timeout = 0,
}) => {
  const close = () => {
    setShow(false)
  }
  return (
    <PopperComponent
      css={[styles.container, _css]}
      open={show}
      placement={placement}
      transition
      anchorEl={anchorEl}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={timeout}>
          <Paper>
            <ClickAwayListener onClickAway={close}>
              <MenuList>{children}</MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </PopperComponent>
  )
}
const styles = {
  container: css`
    z-index: 10000;
    min-width: 180px;
  `,
}
