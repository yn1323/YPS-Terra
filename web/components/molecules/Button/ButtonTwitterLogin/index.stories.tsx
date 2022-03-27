import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ButtonTwitterLogin } from '.'

type StoryObj = ComponentStoryObj<typeof ButtonTwitterLogin>
export default {
  title: 'molecules/Button/ButtonTwitterLogin',
  component: ButtonTwitterLogin,
} as ComponentMeta<typeof ButtonTwitterLogin>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } }, // SP/PCで同じなら削除
}
