import type { TextFieldProps } from '@mui/material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Textbox } from '.'

type StoryObj = ComponentStoryObj<typeof Textbox>
export default {
  title: 'atoms/Input/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>
const args = {
  error: true,
  disabled: false,
  required: false,
  defaultValue: 'default',
  helperText: 'error',
  placeholder: 'placeholder',
  maxLength: 64,
  variant: 'standard' as TextFieldProps['variant'],
}

export const Basic: StoryObj = { args }
