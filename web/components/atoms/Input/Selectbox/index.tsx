import type { SerializedStyles } from '@emotion/react'
import type { SelectProps, SelectChangeEvent } from '@mui/material'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'
import { FC, useState } from 'react'

export type Option = {
  label: string
  value: string
}

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]

  inputLabel?: string
  helperText?: string
  initialValue: string
  options: Option[]
  variant?: SelectProps['variant']
  setter: (v: string) => void
}

export const Selectbox: FC<PropTypes> = ({
  _css,
  inputLabel = '',
  helperText = '',
  initialValue,
  setter,
  options,
  variant = 'standard',
}) => {
  const [val, setVal] = useState(initialValue as Option['value'])

  const handleChange = (
    event: SelectChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setVal(event.target.value as string)
    setter(event.target.value as string)
  }

  return (
    <FormControl css={_css}>
      {inputLabel && <InputLabel>{inputLabel}</InputLabel>}

      <Select
        css={_css}
        // eslint-disable-next-line
        value={val as any}
        onChange={handleChange}
        displayEmpty
        autoWidth
        variant={variant}
      >
        {options.map(({ label, value }, i) => (
          <MenuItem value={value} key={i}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
