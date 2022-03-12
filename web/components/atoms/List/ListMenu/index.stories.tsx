import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
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
