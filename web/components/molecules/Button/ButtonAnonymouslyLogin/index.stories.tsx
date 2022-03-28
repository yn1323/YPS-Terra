import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ButtonAnonymouslyLogin } from '.'

type StoryObj = ComponentStoryObj<typeof ButtonAnonymouslyLogin>
export default {
  title: 'molecules/Button/ButtonAnonymouslyLogin',
  component: ButtonAnonymouslyLogin,
} as ComponentMeta<typeof ButtonAnonymouslyLogin>
const args = {
  loading: false,
}

export const Basic: StoryObj = {
  args,
}
