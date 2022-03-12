import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { MenuAvatar } from '.'

type StoryObj = ComponentStoryObj<typeof MenuAvatar>
export default {
  title: 'molecules/Menu/MenuAvatar',
  component: MenuAvatar,
} as ComponentMeta<typeof MenuAvatar>
const args = {}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button'))
    await screen.findByText('設定')
    await screen.findByText('よくある質問')
    await screen.findByText('ログアウト')
  },
}
