import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { SidebarLayout } from '.'

type StoryObj = ComponentStoryObj<typeof SidebarLayout>
export default {
  title: 'templates/SidebarLayout',
  component: SidebarLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SidebarLayout>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByTestId('closeButton'))
    await screen.findByText('マイページ')
  },
}
