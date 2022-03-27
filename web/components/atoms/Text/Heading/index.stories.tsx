import { AccessTime } from '@mui/icons-material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Heading } from '.'
import { themes } from '@/ui/theme'

type StoryObj = ComponentStoryObj<typeof Heading>
export default {
  title: 'atoms/Text/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>
const args = {
  underline: false,
  children: 'Heading',
  link: '',
  center: false,
  icon: undefined,
}

export const Basic: StoryObj = { args }
export const WithIcon: StoryObj = {
  args: {
    ...args,
    underline: true,
    link: 'link',
    center: true,
    icon: <AccessTime style={{ color: themes.palette.text.secondary }} />,
  },
}
