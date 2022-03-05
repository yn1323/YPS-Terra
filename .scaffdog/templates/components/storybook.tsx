import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { {{ inputs.component | pascal }} } from '.'

// NOTE: ユーザー操作によるUIがないならファイルごと削除すること
export default {
  title: '{{ document.name }}/{{ inputs.component | pascal }}',
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>
export const Primary = { args: { primary: true, label: 'ok' } }

export const Demo: ComponentStoryObj<typeof {{ inputs.component | pascal }}> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('name'), 'somevalue', {
      delay: 300,
    })
    await userEvent.type(canvas.getByTestId('age'), '20', {
      delay: 300,
    })
    await userEvent.selectOptions(canvas.getByTestId('sex'), '1')
    await screen.findByText('登録')
    await userEvent.click(canvas.getByRole('button'));
  },
}
