import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import {
  LocalizationProvider,
  DesktopTimePicker,
  MobileTimePicker,
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
  defaultTime?: Dayjs
  maxTime?: string
  minTime?: string
  minutesStep?: number
}

export const PickerTime: FC<PropTypes> = ({
  _css,
  error,
  errorMessage,
  label,
  defaultTime = dayjs(),
  setter,
  maxTime,
  minTime,
  minutesStep = 5,
}) => {
  const [value, setValue] = useState<Dayjs>(defaultTime)
  const max = maxTime && dayjs(maxTime, 'HH:mm').add(1, 'minutes')
  const min = minTime && dayjs(minTime, 'HH:mm')

  return (
    <LocalizationProvider dateAdapter={DateAdapter} local={ja}>
      <DesktopTimePicker
        ampm={false}
        inputFormat="HH:mm"
        maxTime={max}
        minTime={min}
        label={label}
        value={value}
        minutesStep={minutesStep}
        onChange={newValue => {
          if (newValue) {
            setter(newValue)
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
      <MobileTimePicker
        ampm={false}
        inputFormat="HH:mm"
        maxTime={max}
        minTime={min}
        label={label}
        value={value}
        minutesStep={minutesStep}
        onChange={newValue => {
          if (newValue) {
            setter(newValue)
            setValue(newValue)
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
