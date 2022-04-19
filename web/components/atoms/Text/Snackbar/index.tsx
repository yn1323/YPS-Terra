import type { SerializedStyles } from '@emotion/react'
import { Alert, Snackbar as MuiSnackbar } from '@mui/material'
import type { AlertColor } from '@mui/material'
import { FC, useState, useEffect } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: string | JSX.Element
  show: boolean
  severity?: AlertColor
  vertical?: 'top' | 'bottom'
  horizontal?: 'left' | 'right'
}

const AutoHideDuration = 6000 as const

export const Snackbar: FC<PropTypes> = ({
  _css,
  children,
  show,
  severity = 'success',
  vertical = 'top',
  horizontal = 'right',
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(show)
  }, [show])
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <MuiSnackbar
      css={[_css]}
      open={open}
      autoHideDuration={AutoHideDuration}
      onClose={handleClose}
      anchorOrigin={{
        vertical,
        horizontal,
      }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </MuiSnackbar>
  )
}
