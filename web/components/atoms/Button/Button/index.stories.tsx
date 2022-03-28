import { KeyboardVoice } from '@mui/icons-material'
import type { ButtonProps } from '@mui/material'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from '.'

type StoryObj = ComponentStoryObj<typeof Button>
export default {
  title: 'atoms/Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const args = {
  color: 'primary' as ButtonProps['color'],
  variant: 'contained' as ButtonProps['variant'],
  disabled: false,
  size: 'medium' as ButtonProps['size'],
  startIcon: <KeyboardVoice />,
  onClick: () => {
    true
  },
  children: 'hoge',
  loading: false,
}

export const Basic: StoryObj = { args }
