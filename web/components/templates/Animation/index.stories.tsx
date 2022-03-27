import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Animation } from '.'

type StoryObj = ComponentStoryObj<typeof Animation>
export default {
  title: 'templates/Animation',
  component: Animation,
} as ComponentMeta<typeof Animation>
const args = {}

export const Basic: StoryObj = {
  args,
}
