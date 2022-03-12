import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShopName } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopName>
export default {
  title: 'molecules/Form/FormFormShopName',
  component: FormShopName,
} as ComponentMeta<typeof FormShopName>
const args = {
  error: false,
  defaultValue: '',
  required: false,
  helperText: '必ず入力してください。',
}

export const Basic: StoryObj = { args }
