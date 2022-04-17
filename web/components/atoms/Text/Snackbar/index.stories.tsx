import type { AlertColor } from '@mui/material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Snackbar } from '.'

type StoryObj = ComponentStoryObj<typeof Snackbar>
export default {
  title: 'atoms/Text/Snackbar',
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>
const args = {
  children: 'Succeeded',
  show: true,
  severity: 'success' as AlertColor,
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
