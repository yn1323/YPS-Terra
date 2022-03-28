import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormLoginInput } from '.'

type StoryObj = ComponentStoryObj<typeof FormLoginInput>
export default {
  title: 'molecules/Form/FormLoginInput',
  component: FormLoginInput,
} as ComponentMeta<typeof FormLoginInput>
const args = {
  isSignUp: false,
  loading: false,
}

export const SingIn: StoryObj = {
  args,
}

export const SingUp: StoryObj = {
  args: { ...args, isSignUp: true },
}
