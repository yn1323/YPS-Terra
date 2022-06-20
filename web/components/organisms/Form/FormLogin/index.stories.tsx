import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormLogin } from '.'
import { MailFormType } from '@/organisms/Form/FormMail'

type StoryObj = ComponentStoryObj<typeof FormLogin>
export default {
  title: 'organisms/Form/FormLogin',
  component: FormLogin,
} as ComponentMeta<typeof FormLogin>
const args = {
  mailFormType: 'signUp' as MailFormType,
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
