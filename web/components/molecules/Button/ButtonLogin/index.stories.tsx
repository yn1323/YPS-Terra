import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ButtonLogin } from '.'

type StoryObj = ComponentStoryObj<typeof ButtonLogin>
export default {
  title: 'molecules/Button/ButtonLogin',
  component: ButtonLogin,
} as ComponentMeta<typeof ButtonLogin>

export const Basic: StoryObj = {}
