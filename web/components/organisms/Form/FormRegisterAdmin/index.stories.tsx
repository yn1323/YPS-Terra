import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterAdmin } from '.'

type StoryObj = ComponentStoryObj<typeof FormRegisterAdmin>
export default {
  title: 'organisms/Form/FormRegisterAdmin',
  component: FormRegisterAdmin,
} as ComponentMeta<typeof FormRegisterAdmin>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
