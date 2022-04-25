import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { AuthLayoutPC } from '.'

type StoryObj = ComponentStoryObj<typeof AuthLayoutPC>
export default {
  title: 'templates/AuthLayoutPC',
  component: AuthLayoutPC,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AuthLayoutPC>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
