import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { MenuAvatar } from '.'

type StoryObj = ComponentStoryObj<typeof MenuAvatar>
export default {
  title: 'molecules/Menu/MenuAvatar',
  component: MenuAvatar,
} as ComponentMeta<typeof MenuAvatar>
const args = {
  userName: 'userName',
  imagePath: '',
  onlyImage: false,
}

export const Basic: StoryObj = { args }
