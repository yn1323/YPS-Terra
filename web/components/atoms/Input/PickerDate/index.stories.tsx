import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import dayjs, { Dayjs } from 'dayjs'
import { PickerDate } from '.'

type StoryObj = ComponentStoryObj<typeof PickerDate>
export default {
  title: 'atoms/Input/PickerDate',
  component: PickerDate,
} as ComponentMeta<typeof PickerDate>
const args = {
  error: false,
  errorMessage: 'error message',
  defaultDate: dayjs('2022/03/05', 'YYYY/MM/DD'),
  label: 'PickerDateLabel',
  format: 'M月D日',
  setter: (v: Dayjs) => {
    v
  },
}

export const Basic: StoryObj = { args }
export const Error: StoryObj = { args: { ...args, error: true } }
