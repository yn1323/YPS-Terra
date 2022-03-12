import { AccessTime } from '@mui/icons-material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Heading, HeaderTypes } from '.'
import { themes } from '@/ui/theme'

type StoryObj = ComponentStoryObj<typeof Heading>
export default {
  title: 'atoms/Text/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>
const args = {
  type: 'sub' as HeaderTypes,
  underline: true,
  children: 'Heading',
}

export const Basic: StoryObj = { args }
export const WithIcon: StoryObj = {
  args: {
    ...args,
    link: 'link',
    icon: <AccessTime style={{ color: themes.palette.text.secondary }} />,
  },
}
