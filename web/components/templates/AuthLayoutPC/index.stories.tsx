import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AuthLayoutPC } from '.'

type StoryObj = ComponentStoryObj<typeof AuthLayoutPC>
export default {
  title: 'templates/AuthLayoutPC',
  component: AuthLayoutPC,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AuthLayoutPC>
const args = {
  children: <div>hogehoge</div>,
}

export const Basic: StoryObj = {
  args,
}
