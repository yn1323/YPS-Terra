import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterAdmin } from '.'

type StoryObj = ComponentStoryObj<typeof FormRegisterAdmin>
export default {
  title: 'organisms/Form/FormRegisterAdmin',
  component: FormRegisterAdmin,
  decorators: [
    Story => (
      <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormRegisterAdmin>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } }, // SP/PCで同じなら削除
}
