import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormLogin } from '.'

type StoryObj = ComponentStoryObj<typeof FormLogin>
export default {
  title: 'organisms/Form/FormLogin',
  component: FormLogin,
} as ComponentMeta<typeof FormLogin>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } }, // SP/PCで同じなら削除
}
