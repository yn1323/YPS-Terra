import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { HeaderTitle } from '.'

type StoryObj = ComponentStoryObj<typeof HeaderTitle>
export default {
  title: 'atoms/Text/HeaderTitle',
  component: HeaderTitle,
} as ComponentMeta<typeof HeaderTitle>
const args = {
  isLoggedIn: true,
  children: 'タイトルDayo!',
}

export const Basic: StoryObj = { args }
