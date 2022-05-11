import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormTimeCardAuth } from '.'

type StoryObj = ComponentStoryObj<typeof FormTimeCardAuth>
export default {
  title: 'molecules/Form/FormTimeCardAuth',
  component: FormTimeCardAuth,
} as ComponentMeta<typeof FormTimeCardAuth>
const args = {}

export const Basic: StoryObj = {
  args,
}
