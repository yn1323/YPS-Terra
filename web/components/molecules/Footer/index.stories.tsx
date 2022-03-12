import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Footer } from '.'

type StoryObj = ComponentStoryObj<typeof Footer>
export default {
  title: 'molecules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>
const args = {}

export const Basic: StoryObj = { args }
