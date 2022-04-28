import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { AuthLayoutPC } from '.'

type StoryObj = ComponentStoryObj<typeof AuthLayoutPC>
export default {
  title: 'templates/AuthLayoutPC',
  component: AuthLayoutPC,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AuthLayoutPC>
const args = {
  children: <div key={0}>hogehoge</div>,
}

export const Basic: StoryObj = {
  args,
}
export const Closed: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('closeButton'))
  },
}
