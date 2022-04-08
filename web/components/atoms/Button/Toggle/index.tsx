import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FC, MouseEvent } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  values: string[]
  initialValue: string
  setter: (v: string) => void
}

export const Toggle: FC<PropTypes> = ({
  _css,
  values,
  initialValue,
  setter,
}) => {
  const handleChange = (_: MouseEvent<HTMLElement>, next: string) => {
    setter(next)
  }
  return (
    <ToggleButtonGroup
      css={[_css, styles.container]}
      color="primary"
      value={initialValue}
      exclusive
      onChange={handleChange}
    >
      {values.map((value, i) => (
        <ToggleButton key={i} value={value}>
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
const styles = {
  container: css``,
}
