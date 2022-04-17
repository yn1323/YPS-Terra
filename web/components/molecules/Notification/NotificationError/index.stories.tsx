import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { NotificationError } from '.'

type StoryObj = ComponentStoryObj<typeof NotificationError>
export default {
  title: 'molecules/Notification/NotificationError',
  component: NotificationError,
} as ComponentMeta<typeof NotificationError>
const args = {
  show: true,
}

export const Basic: StoryObj = {
  args,
}
