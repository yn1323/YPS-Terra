import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormUserName } from '.'

type StoryObj = ComponentStoryObj<typeof FormUserName>
export default {
  title: 'molecules/Form/FormFormUserName',
  component: FormUserName,
} as ComponentMeta<typeof FormUserName>
const args = {
  error: false,
  defaultValue: '',
  required: false,
  helperText: '必ず入力してください。',
}

export const Basic: StoryObj = { args }
