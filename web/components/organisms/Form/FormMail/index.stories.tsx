import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormMail } from '.'

type StoryObj = ComponentStoryObj<typeof FormMail>
export default {
  title: 'organisms/Form/FormMail',
  component: FormMail,
} as ComponentMeta<typeof FormMail>

export const Login: StoryObj = {
  args: {
    mailFormType: 'login',
  },
}

export const SignUp: StoryObj = {
  args: {
    mailFormType: 'signUp',
  },
}

export const Reset: StoryObj = {
  args: {
    mailFormType: 'reset',
  },
}
