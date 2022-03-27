import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormSignup } from '.'

type StoryObj = ComponentStoryObj<typeof FormSignup>
export default {
  title: 'organisms/Form/FormSignup',
  component: FormSignup,
} as ComponentMeta<typeof FormSignup>
const args = {}

export const Basic: StoryObj = {
  args,
}
