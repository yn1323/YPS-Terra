import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { LoadingButton } from '@mui/lab'
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
  loading?: boolean
}

export const Button: FC<PropTypes> = ({
  _css,
  color = 'primary',
  variant = 'contained',
  disabled = false,
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  children,
  loading = false,
}) => {
  return (
    <LoadingButton
      css={[_css, styles.button]}
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      loading={loading}
    >
      {children}
    </LoadingButton>
  )
}

const styles = {
  button: css`
    text-transform: none;
  `,
}
