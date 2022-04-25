import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { AuthLayoutSP } from '.'

type StoryObj = ComponentStoryObj<typeof AuthLayoutSP>
export default {
  title: 'templates/AuthLayoutSp',
  component: AuthLayoutSP,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AuthLayoutSP>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } }, // SP/PCで同じなら削除
}

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('authlayoutsp'), 'somevalue', {
      delay: 300,
    })
    await userEvent.type(canvas.getByTestId('age'), '20', {
      delay: 300,
    })
    await userEvent.selectOptions(canvas.getByTestId('sex'), '1')
    await screen.findByText('登録')
    await userEvent.click(canvas.getByRole('button'))
  },
}
