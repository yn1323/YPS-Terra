import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { MenuButton } from '.'
import { ADMIN_MENU, TIMECARD } from '@/ui/layout/menu'

type StoryObj = ComponentStoryObj<typeof MenuButton>
export default {
  title: 'molecules/Menu/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>
const args = {
  children: 'LABEL',
}

export const Basic: StoryObj = { args: { ...TIMECARD[0], ...args } }
export const DropDown: StoryObj = { args: { ...ADMIN_MENU[0], ...args } }

export const Demo: StoryObj = {
  args: { ...ADMIN_MENU[0], ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByTestId('button'))
    await screen.findByText('シフト管理')
    await screen.findByText('勤怠管理')
    await screen.findByText('ユーザー管理')
  },
}
