import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'

export const SampleButton = () => {
  return (
    <Button variant="contained" startIcon={<Delete />}>
      Hello Worl
    </Button>
  )
}
