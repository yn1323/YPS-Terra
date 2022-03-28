import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Center } from '.'

type StoryObj = ComponentStoryObj<typeof Center>
export default {
  title: 'templates/Center',
  component: Center,
} as ComponentMeta<typeof Center>
const args = {
  children: <div>text</div>,
}

export const Basic: StoryObj = {
  args,
}
