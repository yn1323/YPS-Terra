import type { SelectProps } from '@mui/material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Selectbox } from '.'

type StoryObj = ComponentStoryObj<typeof Selectbox>
export default {
  title: 'atoms/Input/Selectbox',
  component: Selectbox,
} as ComponentMeta<typeof Selectbox>
const args = {
  variant: 'standard' as SelectProps['variant'],
  inputLabel: 'InputLabel',
  helperText: 'helperText',
  initialValue: '5',
  options: [
    {
      label: '5分毎',
      value: '5',
    },
    {
      label: '10分毎',
      value: '10',
    },
    {
      label: '15分毎',
      value: '15',
    },
    {
      label: '20分毎',
      value: '20',
    },
    {
      label: '30分毎',
      value: '30',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setter: () => {},
}

export const Basic: StoryObj = { args }
