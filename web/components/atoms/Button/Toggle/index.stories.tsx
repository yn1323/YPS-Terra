import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Toggle } from '.'

type StoryObj = ComponentStoryObj<typeof Toggle>
export default {
  title: 'atoms/Button/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>
const args = {
  values: ['yes', 'no'],
  initialValue: 'yes',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setter: () => {},
}

export const Basic: StoryObj = {
  args,
}
