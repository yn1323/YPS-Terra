import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { PickerDate } from '.'

type StoryObj = ComponentStoryObj<typeof PickerDate>
export default {
  title: 'atoms/Input/PickerDate',
  component: PickerDate,
} as ComponentMeta<typeof PickerDate>
const args = {
  error: false,
  errorMessage: 'error message',
  label: 'label',
}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('pickerdate'), 'somevalue', {
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
