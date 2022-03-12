import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormTimeCardAuth } from '.'

type StoryObj = ComponentStoryObj<typeof FormTimeCardAuth>
export default {
  title: 'molecules/Form/FormTimeCardAuth',
  component: FormTimeCardAuth,
} as ComponentMeta<typeof FormTimeCardAuth>
const args = {
  initialValue: true,
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
