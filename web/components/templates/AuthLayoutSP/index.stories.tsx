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
const args = {
  children: <div key={0}>hoge</div>,
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414] } },
}

export const Drawer: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414] } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await screen.findByText('マイページ')
    await screen.findByText('シフト')
    await screen.findByText('勤務記録')
    await screen.findByText('打刻')
    await userEvent.click(canvas.getByTestId('ellipsis'))
    await screen.findByText('設定')
    await screen.findByText('使い方')
    await screen.findByText('ログアウト')
  },
}
