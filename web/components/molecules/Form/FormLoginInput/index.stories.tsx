import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormLoginInput } from '.'

type StoryObj = ComponentStoryObj<typeof FormLoginInput>
export default {
  title: 'molecules/Form/FormLoginInput',
  component: FormLoginInput,
} as ComponentMeta<typeof FormLoginInput>
const args = {}

export const Basic: StoryObj = {
  args,
}