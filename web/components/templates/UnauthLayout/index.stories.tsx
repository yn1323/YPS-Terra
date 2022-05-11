import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { UnauthHeader } from '.'

type StoryObj = ComponentStoryObj<typeof UnauthHeader>
export default {
  title: 'templates/UnauthHeader',
  component: UnauthHeader,
} as ComponentMeta<typeof UnauthHeader>
const args = {
  children: <div>test</div>,
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] }, layout: 'fullscreen' },
}
export const NoLogin: StoryObj = {
  args: { ...args, showLoginButton: false },
  parameters: { chromatic: { viewports: [414, 1080] }, layout: 'fullscreen' },
}
