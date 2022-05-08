import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterUser } from '.'

type StoryObj = ComponentStoryObj<typeof FormRegisterUser>
export default {
  title: 'organisms/Form/FormRegisterUser',
  component: FormRegisterUser,
  decorators: [
    Story => (
      <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormRegisterUser>
const args = {
  shopId: 'aaaaa',
}

export const Basic: StoryObj = {
  args,
}
