import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { PickerTime } from '.'

type StoryObj = ComponentStoryObj<typeof PickerTime>
export default {
  title: 'atoms/Input/PickerTime',
  component: PickerTime,
} as ComponentMeta<typeof PickerTime>
const args = {
  placeholder: 'Select time',
  startTime: '07:15',
  endTime: '19:15',
  step: 5 as const,
}

export const Basic: StoryObj = {
  args,
}
