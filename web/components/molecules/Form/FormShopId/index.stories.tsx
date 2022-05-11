import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShopId } from '.'

type StoryObj = ComponentStoryObj<typeof FormShopId>
export default {
  title: 'molecules/Form/FormShopId',
  component: FormShopId,
} as ComponentMeta<typeof FormShopId>
const args = {}

export const Basic: StoryObj = {
  args,
}
