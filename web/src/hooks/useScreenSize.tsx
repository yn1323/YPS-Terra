import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'

export const useScreenSize = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('sm'))
  return {
    isPC,
    isSP: !isPC,
  }
}
