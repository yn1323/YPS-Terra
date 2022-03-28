import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Header } from '.'

type StoryObj = ComponentStoryObj<typeof Header>
export default {
  title: 'organisms/Header/Header',
  component: Header,
} as ComponentMeta<typeof Header>
const args = {
  isLoggedIn: true,
}

export const Basic: StoryObj = { args }
export const NotLoggedIn: StoryObj = {
  args: {
    isLoggedIn: false,
  },
}
