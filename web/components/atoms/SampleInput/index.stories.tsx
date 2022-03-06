import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { SampleInput } from '.'

export default {
  title: 'atoms/SampleInput',
  component: SampleInput,
} as ComponentMeta<typeof SampleInput>
export const Primary = { args: { primary: true, label: 'ok' } }

export const SuccessInput: ComponentStoryObj<typeof SampleInput> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('name'), 'some name', {
      delay: 300,
    })
  },
}
