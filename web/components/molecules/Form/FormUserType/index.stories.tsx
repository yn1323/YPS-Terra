import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormUserType } from '.'
import { UserType } from '@/config/appConfigs'

type StoryObj = ComponentStoryObj<typeof FormUserType>
export default {
  title: 'molecules/Form/FormUserType',
  component: FormUserType,
} as ComponentMeta<typeof FormUserType>
const args = {
  initialValue: 'admin' as UserType,
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
