import { css } from '@emotion/react'
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'

const style = css`
  background-color: red;
  &:hover {
    background-color: red;
  }
`

export const SampleButton = () => {
  return (
    <Button css={style} variant="contained" startIcon={<Delete />}>
      Hello World
    </Button>
  )
}
