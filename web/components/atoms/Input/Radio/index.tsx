import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import {
  FormControlLabel,
  RadioGroup,
  Radio as MaterialUIRadio,
} from '@mui/material'
import type { RadioProps } from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { Note } from '@/atoms/Button/Note'

export type Option = {
  label: string
  value: string
  disabled?: boolean
  color?: RadioProps['color']
  note?: string
}

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  initialValue: string
  groupName: string
  options: Option[]
  setter: (v: string) => void
  row?: boolean
}

export const Radio: FC<PropTypes> = ({
  _css,
  initialValue,
  groupName,
  options,
  setter,
  row = false,
}) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setter(value)
  }, [value, setter])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <RadioGroup
      css={_css}
      name={groupName}
      arial-label={groupName}
      value={value}
      onChange={handleChange}
      row={row}
    >
      {options.map(
        (
          { label, value, disabled = false, color = 'primary', note = '' },
          i
        ) => (
          <div css={styles.labelContainer} key={i}>
            <FormControlLabel
              value={value}
              control={<MaterialUIRadio size="small" color={color} />}
              label={<div css={styles.label}>{label}</div>}
              disabled={disabled}
            />
            {note && <Note>{note}</Note>}
          </div>
        )
      )}
    </RadioGroup>
  )
}
const styles = {
  labelContainer: css`
    display: flex;
  `,
  label: css`
    font-size: 0.9rem;
  `,
}
