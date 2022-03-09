import type { SerializedStyles } from '@emotion/react'
import { Button as MuiButton } from '@mui/material'
import type { ButtonProps } from '@mui/material'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  disabled?: boolean
  size?: ButtonProps['size']
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  onClick: () => void
  children: string
}

export const Button: FC<PropTypes> = ({
  _css,
  color = 'primary',
  variant = 'inherit',
  disabled = false,
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  children,
}) => {
  return (
    <MuiButton
      css={_css}
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}
