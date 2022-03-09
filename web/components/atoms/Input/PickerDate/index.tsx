import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { LocalizationProvider, DatePicker, DesktopDatePicker } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDayjs'
import { Box, TextField } from '@mui/material'
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import { FC, useState } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]

  error?: boolean
  errorMessage?: string
  label?: string
}

export const PickerDate: FC<PropTypes> = ({
  _css,
  error,
  errorMessage,
  label,
}) => {
  const [value, setValue] = useState<Date | null>(new Date())
  return (
    <LocalizationProvider dateAdapter={DateAdapter} local={ja}>
      <DesktopDatePicker
        label={error ? errorMessage || label : label}
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  )
}
const styles = {
  container: css``,
}

// import moment from '@date-io/moment'
// import {
//   KeyboardTimePickerProps,
//   MuiPickersUtilsProvider,
//   DatePicker,
// } from '@material-ui/pickers'
// import { MaterialUiPickersDate } from '@mui/pickers/typings/date'
// import DateAdapter from '@mui/lab/AdapterDayjs';
// import 'dayjs/locale/ja'

// type PropTypes {
//   error?: boolean
//   margin?: KeyboardTimePickerProps['margin']
//   inputVariant?: KeyboardTimePickerProps['inputVariant']
//   errorMessage?: string
//   initialDate?: Moment
//   id?: string
//   label?: string
//   setter: (d: Moment) => void
// }

// const PickerDate: FC<PropTypes> = ({
//   error = false,
//   margin = 'none',
//   id,
//   errorMessage,
//   label,
//   initialDate = null,
//   setter,
//   inputVariant = 'standard',
// }) => {
//   const [locale] = useState('ja')
//   const [d, setD] = useState<Moment | null>(initialDate)

//   const handleDateChange = (date: MaterialUiPickersDate) => {
//     if (date) {
//       setD(date)
//       setter(date)
//     }
//   }

//   return (
//     <MuiPickersUtilsProvider utils={moment} locale={locale}>
//       <DatePicker
//         error={error}
//         fullWidth
//         inputVariant={inputVariant}
//         variant="inline"
//         margin={margin}
//         autoOk
//         format="M/D"
//         id={id}
//         label={error ? errorMessage || label : label}
//         disableToolbar
//         value={d}
//         onChange={handleDateChange}
//       />
//     </MuiPickersUtilsProvider>
//   )
// }

// export default PickerDate
