import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { MenuList } from '.'

type StoryObj = ComponentStoryObj<typeof MenuList>
export default {
  title: 'organisms/Menu/MenuList',
  component: MenuList,
} as ComponentMeta<typeof MenuList>
const args = {
  open: true,
}

export const Basic: StoryObj = {
  args,
}
export const IconOnly: StoryObj = {
  args: { ...args, open: false },
}
