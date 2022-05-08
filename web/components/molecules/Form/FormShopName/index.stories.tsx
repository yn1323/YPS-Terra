import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShopName } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopName>
export default {
  title: 'molecules/Form/FormShopName',
  component: FormShopName,
} as ComponentMeta<typeof FormShopName>
const args = {}

export const Basic: StoryObj = {
  args,
}
