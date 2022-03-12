import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { MenuHeader } from '.'

type StoryObj = ComponentStoryObj<typeof MenuHeader>
export default {
  title: 'molecules/Menu/MenuHeader',
  component: MenuHeader,
} as ComponentMeta<typeof MenuHeader>
const args = {
  showTimeCard: true,
  isAdmin: true,
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const DemoAll: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText('マイページ'))
    await screen.findByText('TOP')
    await screen.findByText('シフト')
    await screen.findByText('勤怠')

    await userEvent.click(canvas.getByText('申請'))
    await screen.findByText('シフト申請')
    await screen.findByText('タイムカード編集')
    await screen.findByText('申請状況')

    await screen.findByText('タイムカード')

    await userEvent.click(canvas.getByText('店舗管理'))
    await screen.findByText('シフト管理')
    await screen.findByText('勤怠管理')
    await screen.findByText('ユーザー管理')
  },
}

export const DemoNotAdmin: StoryObj = {
  args: { showTimeCard: false, isAdmin: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText('マイページ'))
    await screen.findByText('TOP')
    await screen.findByText('シフト')
    await screen.findByText('勤怠')

    await userEvent.click(canvas.getByText('申請'))
    await screen.findByText('シフト申請')
    await screen.findByText('タイムカード編集')
    await screen.findByText('申請状況')
  },
}
