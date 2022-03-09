import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Note } from '.'

type StoryObj = ComponentStoryObj<typeof Note>
export default {
  title: `atoms/Button/Note`,
  component: Note,
} as ComponentMeta<typeof Note>
const args = {
  children: 'Storybook',
}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.hover(canvas.getByTestId('button'))
  },
}
