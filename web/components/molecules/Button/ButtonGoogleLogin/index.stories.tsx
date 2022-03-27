import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ButtonGoogleLogin } from '.'

type StoryObj = ComponentStoryObj<typeof ButtonGoogleLogin>
export default {
  title: 'molecules/Button/ButtonGoogleLogin',
  component: ButtonGoogleLogin,
} as ComponentMeta<typeof ButtonGoogleLogin>
const args = {}

export const Basic: StoryObj = {
  args,
}
