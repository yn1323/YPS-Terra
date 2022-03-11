import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import dayjs, { Dayjs } from 'dayjs'
import { PickerTime } from '.'

type StoryObj = ComponentStoryObj<typeof PickerTime>
export default {
  title: 'atoms/Input/PickerTime',
  component: PickerTime,
} as ComponentMeta<typeof PickerTime>
const args = {
  error: false,
  errorMessage: 'error message',
  defaultTime: dayjs('13:35', 'HH:mm'),
  label: 'label',
  setter: (v: Dayjs) => {
    v
  },
  minutesStep: 5,
  maxTime: '13:30',
  minTime: '8:45',
}

export const Basic: StoryObj = { args }
export const Error: StoryObj = { args: { ...args, error: true } }
