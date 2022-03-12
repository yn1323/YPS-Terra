import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Radio, Option } from '.'

type StoryObj = ComponentStoryObj<typeof Radio>
export default {
  title: 'atoms/Input/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>
const args = {
  groupName: 'age',
  initialValue: '200',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setter: (_: string) => {},
  options: [
    { value: '100', label: 'hundred' },
    { value: '200', label: 'two-hundred' },
    { value: '300', label: 'disabled', disabled: true },
    { value: '400', label: 'disabled = false', disabled: false },
    { value: '500', label: 'color-default', color: 'default' },
    { value: '600', label: 'color-secondary', color: 'secondary' },
    { value: '700', label: 'note', color: 'secondary', note: 'tooltip' },
  ] as Option[],
  row: true,
}

export const Basic: StoryObj = { args }
