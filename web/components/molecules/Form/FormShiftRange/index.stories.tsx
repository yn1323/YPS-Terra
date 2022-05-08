import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShiftRange } from '.'

type StoryObj = ComponentStoryObj<typeof FormShiftRange>
export default {
  title: 'molecules/Form/FormShiftRange',
  component: FormShiftRange,
} as ComponentMeta<typeof FormShiftRange>
const args = {}

export const Basic: StoryObj = {
  args,
}
