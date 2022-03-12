import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FormControlLabel, Switch as MaterialUiSwitch } from '@mui/material'
import type { SwitchProps } from '@mui/material'
import { FC, useState } from 'react'

export type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  color?: SwitchProps['color']
  disabled?: boolean
  initialChecked: boolean
  size?: SwitchProps['size']
  labelOnFalse?: string
  setter: (v: boolean) => void
  name?: string
  children?: string
}

export const Switch: FC<PropTypes> = ({
  _css,
  color = 'primary',
  disabled = false,
  initialChecked,
  size = 'medium',
  labelOnFalse = '',
  setter,
  name = '',
  children,
}) => {
  const [isChecked, setChecked] = useState(initialChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((event.target as HTMLInputElement).checked)
    setter((event.target as HTMLInputElement).checked)
  }
  return (
    <FormControlLabel
      css={_css}
      style={{ fontSize: '0,9rem' }}
      data-testid="switch"
      control={
        <MaterialUiSwitch
          checked={isChecked}
          color={color}
          size={size}
          disabled={disabled}
          onChange={handleChange}
          name={name}
        />
      }
      label={
        <p css={styles.label}>
          {isChecked ? children : labelOnFalse || children}
        </p>
      }
    />
  )
}
const styles = {
  label: css`
    font-size: 0.9rem; ;
  `,
}
