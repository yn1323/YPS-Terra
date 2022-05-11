import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { PickerDate } from '.'

type StoryObj = ComponentStoryObj<typeof PickerDate>
export default {
  title: 'atoms/Input/PickerDate',
  component: PickerDate,
} as ComponentMeta<typeof PickerDate>
const args = {
  defaultVal: '2020-01-01',
}

export const Basic: StoryObj = {
  args,
}
