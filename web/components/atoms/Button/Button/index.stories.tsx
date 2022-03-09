import { KeyboardVoice } from '@mui/icons-material'
import type { ButtonProps } from '@mui/material'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from '.'

type StoryObj = ComponentStoryObj<typeof Button>
export default {
  title: `atoms/Button/Button`,
  component: Button,
} as ComponentMeta<typeof Button>

const args = {
  color: 'primary' as ButtonProps['color'],
  variant: 'contained' as ButtonProps['variant'],
  disabled: false,
  size: 'medium' as ButtonProps['size'],
  startIcon: <KeyboardVoice />,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  children: 'hoge',
}

export const Basic: StoryObj = { args }
