import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { {{ inputs.component | pascal }} } from '.'

type StoryObj = ComponentStoryObj<typeof {{ inputs.component | pascal }}>
export default {
  title: '{{ document.name }}/{{ inputs.type | pascal }}/{{ inputs.component | pascal }}',
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>
const args = {}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('{{inputs.component | lower}}'), 'somevalue', {
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
