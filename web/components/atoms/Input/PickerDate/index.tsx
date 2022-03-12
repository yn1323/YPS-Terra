import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import {
  LocalizationProvider,
  DesktopDatePicker,
  MobileDatePicker,
} from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDayjs'
import { TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import ja from 'dayjs/locale/ja'
import { FC, useState } from 'react'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  setter: (date: Dayjs) => void
  error?: boolean
  errorMessage?: string
  label?: string
  defaultDate?: Dayjs
  format?: string
  maxDate?: Date
  minDate?: Date
}

export const PickerDate: FC<PropTypes> = ({
  _css,
  error,
  errorMessage,
  label,
  defaultDate = dayjs(),
  setter,
  format = 'M/D',
  maxDate,
  minDate,
}) => {
  const [value, setValue] = useState<Date>(defaultDate.toDate())

  return (
    <LocalizationProvider dateAdapter={DateAdapter} local={ja}>
      <DesktopDatePicker
        maxDate={maxDate}
        minDate={minDate}
        label={label}
        inputFormat={format}
        value={value}
        onChange={newValue => {
          if (newValue) {
            setter(dayjs(newValue))
            setValue(newValue)
          }
        }}
        renderInput={params => {
          const isError = !params.error ? error : params.error
          return (
            <TextField
              css={[_css, styles.pc]}
              variant="standard"
              {...params}
              error={isError}
              helperText={isError && errorMessage}
            />
          )
        }}
      />
      <MobileDatePicker
        maxDate={maxDate}
        minDate={minDate}
        label={label}
        inputFormat={format}
        value={defaultDate.toDate()}
        onChange={newValue => {
          if (newValue) {
            setter(dayjs(newValue))
          }
        }}
        renderInput={params => {
          const isError = !params.error ? error : params.error
          return (
            <TextField
              css={[_css, styles.sp]}
              variant="standard"
              {...params}
              error={isError}
              helperText={isError && errorMessage}
            />
          )
        }}
      />
    </LocalizationProvider>
  )
}

const styles = {
  pc: css`
    display: none;
    ${mediaQueries('sm')} {
      display: block;
    }
  `,
  sp: css`
    ${mediaQueries('sm')} {
      display: none;
    }
  `,
}
