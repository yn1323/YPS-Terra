import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Switch } from '.'

type StoryObj = ComponentStoryObj<typeof Switch>
export default {
  title: `atoms/Button/Switch`,
  component: Switch,
} as ComponentMeta<typeof Switch>

const args = {
  initialChecked: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setter: () => {},
  children: 'LABEL',
}

export const Basic: StoryObj = {
  args,
}
export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('switch'))
  },
}
