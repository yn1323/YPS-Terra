import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { AuthLayoutPC } from '.'

type StoryObj = ComponentStoryObj<typeof AuthLayoutPC>
export default {
  title: 'templates/AuthLayoutPC',
  component: AuthLayoutPC,
  parameters: {
    layout: 'fullscreen',
    parameters: { chromatic: { viewports: [414, 1080] } },
  },
} as ComponentMeta<typeof AuthLayoutPC>
const args = {
  children: <div>hogehoge</div>,
}

export const Basic: StoryObj = {
  args,
}
