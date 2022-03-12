import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegister } from '.'

type StoryObj = ComponentStoryObj<typeof FormRegister>
export default {
  title: 'organisms/Form/FormRegister',
  component: FormRegister,
} as ComponentMeta<typeof FormRegister>
const args = {}

export const Basic: StoryObj = { args }
