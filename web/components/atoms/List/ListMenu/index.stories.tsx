import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { ListMenu } from '.'
import { COMMON_MENU } from '@/ui/layout/menu'

type StoryObj = ComponentStoryObj<typeof ListMenu>
export default {
  title: 'atoms/List/ListMenu',
  component: ListMenu,
} as ComponentMeta<typeof ListMenu>
const args = {
  items: COMMON_MENU[1].items,
  delimeterPosition: [1],
}

export const Basic: StoryObj = { args }

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('listmenu'), 'somevalue', {
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
