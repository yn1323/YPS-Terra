import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ButtonTwitterLogin } from '.'

type StoryObj = ComponentStoryObj<typeof ButtonTwitterLogin>
export default {
  title: 'molecules/Button/ButtonTwitterLogin',
  component: ButtonTwitterLogin,
} as ComponentMeta<typeof ButtonTwitterLogin>
const args = {
  loading: false,
}

export const Basic: StoryObj = {
  args,
}