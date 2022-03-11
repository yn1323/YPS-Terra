import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { MenuButton } from '.'

type StoryObj = ComponentStoryObj<typeof MenuButton>
export default {
  title: 'molecules/Menu/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>
const args = {}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('menubutton'), 'somevalue', {
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
