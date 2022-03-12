import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShopId } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopId>
export default {
  title: 'molecules/Form/FormShopId',
  component: FormShopId,
} as ComponentMeta<typeof FormShopId>
const args = {
  error: false,
  defaultValue: '',
  required: false,
  helperText: '必ず入力してください。',
}

export const Basic: StoryObj = { args }
