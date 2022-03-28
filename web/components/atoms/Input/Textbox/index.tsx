import type { SerializedStyles } from '@emotion/react'
import { TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'
import { FC, forwardRef, useState } from 'react'

export type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  maxLength?: number
  ref: TextFieldProps['inputRef']
} & TextFieldProps

export const Textbox: FC<PropTypes> = forwardRef(
  (
    {
      _css,
      variant = 'standard',
      error = false,
      disabled = false,
      required = false,
      defaultValue = '',
      helperText = '',
      placeholder = '',
      maxLength = 64,
      type = 'text',
    },
    ref
  ) => {
    const [defaultVal] = useState(defaultValue)

    return (
      <TextField
        css={_css}
        variant={variant}
        fullWidth
        inputRef={ref}
        error={error}
        type={type}
        inputProps={{ maxLength }}
        disabled={disabled}
        required={required}
        defaultValue={defaultVal}
        helperText={error && helperText}
        placeholder={placeholder}
        autoComplete={(type = 'password' ? 'new-password' : '')}
      />
    )
  }
)
