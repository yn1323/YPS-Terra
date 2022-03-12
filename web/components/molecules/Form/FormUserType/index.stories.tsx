import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormUserType } from '.'

type StoryObj = ComponentStoryObj<typeof FormUserType>
export default {
  title: 'molecules/Form/FormUserType',
  component: FormUserType,
} as ComponentMeta<typeof FormUserType>
const args = {
  initialValue: 'admin',
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
