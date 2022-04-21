import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { MenuList } from '.'

type StoryObj = ComponentStoryObj<typeof MenuList>
export default {
  title: 'organisms/Menu/MenuList',
  component: MenuList,
} as ComponentMeta<typeof MenuList>
const args = {
  userName: 'userName',
  imagePath: '',
}

export const Basic: StoryObj = {
  args,
}
