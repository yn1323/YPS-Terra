import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterUser } from '.'

type StoryObj = ComponentStoryObj<typeof FormRegisterUser>
export default {
  title: 'organisms/Form/FormRegisterUser',
  component: FormRegisterUser,
} as ComponentMeta<typeof FormRegisterUser>
const args = {
  shopId: 'shopId---',
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
