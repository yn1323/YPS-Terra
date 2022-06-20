import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormUserName } from '.'

type StoryObj = ComponentStoryObj<typeof FormUserName>
export default {
  title: 'molecules/Form/FormUserName',
  component: FormUserName,
} as ComponentMeta<typeof FormUserName>
const args = {}

export const Basic: StoryObj = {
  args,
}
