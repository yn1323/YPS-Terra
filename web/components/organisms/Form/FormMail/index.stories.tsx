import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { FormMail } from '.'

type StoryObj = ComponentStoryObj<typeof FormMail>
export default {
  title: 'organisms/Form/FormMail',
  component: FormMail,
} as ComponentMeta<typeof FormMail>
const args = {
  isSignUp: true,
}

export const Basic: StoryObj = {
  args,
}

export const SignUp: StoryObj = {
  args: { isSignUp: false },
}

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('formmail'), 'somevalue', {
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
